"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen  justify-center bg-gray-100 py-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-md space-y-4">
        <Link href="/groenplaats"
              className="block rounded-lg bg-blue-500 p-4 text-white transition hover:bg-blue-600 text-center text-2xl">Groenplaats</Link>
        <Link href="/pothoek"
              className="block rounded-lg bg-blue-500 p-4 text-white transition hover:bg-blue-600 text-center text-2xl">Pothoek</Link>
      </div>
    </main>
  );
}
