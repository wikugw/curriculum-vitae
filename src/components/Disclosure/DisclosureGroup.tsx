"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

/**
 * Keeps track of which collapsible panels in a group are open, so that one
 * "Expand all / Collapse all" button can control all of them.
 */
type DisclosureGroupState = {
  isOpen: (id: string) => boolean;
  toggle: (id: string) => void;
  areAllOpen: boolean;
  setAllOpen: (open: boolean) => void;
};

const DisclosureGroupContext = createContext<DisclosureGroupState | null>(null);

type DisclosureGroupProps = {
  /** The id of every panel in the group. Needed to know when all of them are open. */
  ids: string[];
  children: ReactNode;
};

export function DisclosureGroup({ ids, children }: DisclosureGroupProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  function isOpen(id: string) {
    return openIds.has(id);
  }

  function toggle(id: string) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function setAllOpen(open: boolean) {
    setOpenIds(open ? new Set(ids) : new Set());
  }

  const areAllOpen = ids.every((id) => openIds.has(id));

  return (
    <DisclosureGroupContext value={{ isOpen, toggle, areAllOpen, setAllOpen }}>
      {children}
    </DisclosureGroupContext>
  );
}

export function useDisclosureGroup(): DisclosureGroupState {
  const group = useContext(DisclosureGroupContext);
  if (!group) {
    throw new Error("Disclosure components must be used inside a <DisclosureGroup>.");
  }
  return group;
}
