import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-white rounded-xl shadow p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold mb-2">
        Welcome, {session?.user?.name || "User"}!
      </h1>
      <p className="text-gray-600 text-lg">
        This is your private dashboard. Let’s build something amazing together 🚀
      </p>
    </div>
  );
}
