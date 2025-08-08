import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Image from "next/image";
import SignOutButton from "./signout-button";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 flex flex-col items-center shadow-lg">
        <div className="mb-6 text-center">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="Profile"
              width={64}
              height={64}
              className="rounded-full border-4 border-white shadow-md mb-2"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold">
              {session?.user?.name?.charAt(0)}
            </div>
          )}
          <p className="text-xl font-bold">{session?.user?.name || "Guest"}</p>
          <p className="text-sm text-gray-300">Welcome back 👋</p>
        </div>

        <nav className="flex flex-col gap-4 w-full mt-4">
          <button className="text-left w-full text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition">
            Dashboard
          </button>
          <button
            className="text-left w-full text-gray-500 cursor-not-allowed px-4 py-2 rounded bg-gray-800"
            disabled
          >
            Settings
          </button>
        </nav>

        <div className="w-full mt-auto">
          <SignOutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
