"use client";
import { useGroenplaats } from "~/hooks/useGroenplaats";
import { RoomListItem } from "~/_components/RoomListItem";
import { ArrowBigLeft } from "lucide-react";

export default function Page() {
  const { filter, filteredRooms } = useGroenplaats();

  return (
    <main className="flex min-h-screen justify-center bg-gray-100 py-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
        <div className="flex">
          <button
            onClick={() => window.history.back()}
          >
            <ArrowBigLeft />
          </button>
          <h1 className="mb-4 text-center text-2xl font-bold flex-grow">Pothoek</h1>
        </div>
        <input
          onChange={(event) => filter(event.target.value)}
          className="mb-8 w-full rounded-lg border-2 border-gray-400 p-2"
        />
        <ul className="space-y-2">
          {filteredRooms.map((room, index) => (
            <RoomListItem room={room} key={index} />
          ))}
        </ul>
      </div>
    </main>
  );
}
