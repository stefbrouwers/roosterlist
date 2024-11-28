"use client";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [filter, setfilter] = useState("");
  const debouncedFilter = useDebounce(filter, 300);
  const rooms_1 = [
    "GR-101%20(K)",
    "GR-102%20(K)",
    "GR-103%20(K)",
    "GR-104%20(K)",
    "GR-105%20(K)",
    "GR-106%20(K)",
    "GR-107%20(K)",
    "GR-108%20(K)",
    "GR-109%20(K)",
    "GR-110%20(K)",
    "GR-111%20(K)",
  ];
  const rooms0 = [
    "GR-001",
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
  const rooms3 = [
    "GR-301",
    "GR-302",
    "GR-303",
    "GR-304",
    "GR-305",
    "GR-306",
    "GR-307",
    "GR-308",
    "GR-309",
    "GR-310",
    "GR-311",
    "GR-312",
  ];
  const rooms4 = [
    "GR-401",
    "GR-402",
    "GR-403",
    "GR-404",
    "GR-405",
    "GR-406",
    "GR-407",
    "GR-408",
    "GR-409",
    "GR-410",
    "GR-411",
    "GR-412",
    "GR-413",
    "GR-414",
    "GR-415",
    "GR-416",
    "GR-417",
    "GR-418",
    "GR-419",
    "GR-420",
  ];
  const rooms5 = [
    "GR-501",
    "GR-502",
    "GR-503",
    "GR-504",
    "GR-505",
    "GR-506",
    "GR-507",
    "GR-508",
    "GR-509",
    "GR-510",
    "GR-511",
    "GR-512",
    "GR-513",
    "GR-514",
    "GR-515",
    "GR-516",
    "GR-517",
    "GR-518",
    "GR-519",
    "GR-520",
  ];
  const rooms = [
    ...rooms_1,
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
          className="mb-2 w-full rounded-lg border border-gray-300 p-2"
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
