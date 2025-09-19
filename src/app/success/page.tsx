"use client";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">The data is correct.</h2>
        <p className="mb-6 text-blue-400">บันทึก Portfolio สำเร็จ</p>
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
          onClick={() => router.push("/")} // กลับหน้าหลัก
        >
          HOME
        </button>
      </div>
    </div>
  );
}
