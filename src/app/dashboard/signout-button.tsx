"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={async () => {
        await signOut({ redirect: false });
        window.location.href = "/";
      }}
      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded shadow w-full transition"
    >
      Sign Out
    </button>
  );
}
