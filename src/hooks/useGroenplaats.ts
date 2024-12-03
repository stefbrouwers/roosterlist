import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { rooms } from "../../data/groenplaatsLokalen";

export function useGroenplaats() {
  const [filterString, setFilterString] = useState("");
  const debouncedFilter = useDebounce(filterString, 300);

  function filter(filterString: string) {
    setFilterString(filterString);
  }

  return {
    filter,
    rooms,
    filteredRooms: rooms.filter((room) =>
      room.displayName.includes(debouncedFilter),
    ),
  };
}
