"use client";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [filter, setfilter] = useState("");
  const debouncedFilter = useDebounce(filter, 300);

  const rooms0 = [
    "GR-001",
    "GR-002",
    "GR-003",
    "GR-004",
    "GR-005",
    "GR-006",
    "GR-007",
    "GR-008",
    "GR-009",
    "GR-010",
    "GR-011",
    "GR-012",
    "GR-013",
    "GR-014",
    "GR-015",
    "GR-016",
    "GR-017",
    "GR-018",
    "GR-019",
    "GR-020",
  ];
  const rooms1 = [
    "GR-101",
    "GR-102",
    "GR-103",
    "GR-104",
    "GR-105",
    "GR-106",
    "GR-107",
    "GR-108",
    "GR-109",
    "GR-110",
    "GR-111",
    "GR-112",
    "GR-113",
    "GR-114",
    "GR-115",
    "GR-116",
    "GR-117",
    "GR-118",
    "GR-119",
    "GR-120",
  ];
  const rooms2 = [
    "GR-201",
    "GR-202",
    "GR-203",
    "GR-204",
    "GR-205",
    "GR-206",
    "GR-207",
    "GR-208",
    "GR-209",
    "GR-210",
    "GR-211",
    "GR-212",
    "GR-213",
    "GR-214",
    "GR-215",
    "GR-216",
    "GR-217",
    "GR-218",
    "GR-219",
    "GR-220", 
  ];
  const rooms3 = [""];
  const rooms4 = [""];
  const rooms5 = [""];
  const rooms = [
    ...rooms0,
    ...rooms1,
    ...rooms2,
    ...rooms3,
    ...rooms4,
    ...rooms5,
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
        <input
          onChange={(event) => setfilter(event.target.value)}
          className="w-full rounded-lg border border-gray-300 p-2 mb-2"
        />
        <ul className="space-y-2">
          {rooms
            .filter((room) => room.includes(debouncedFilter))
            .map((room, index) => (
              <li key={index}>
                <Link
                  href={`https://cloud.timeedit.net/be_kdg/web/1/s.html?sid=4&object=room_${room}&type=rooms&p=0.m%2C2.w&rr=1`}
                  target="_blank"
                  className="block rounded-lg bg-blue-500 p-4 text-white transition hover:bg-blue-600"
                >
                  {room}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
