import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 border-2 border-gray-300 rounded-xl p-8 shadow-lg bg-white/80">
        <h1 className="text-3xl font-bold text-blue-500">TCAS69</h1>
        <div className="flex gap-4">
          <Link
            href="/student"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Apply
          </Link>
          <Link
            href="/teacher"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Lecturer
          </Link>
        </div>
      </div>
    </div>
  );
}

