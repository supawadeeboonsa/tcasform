// src/app/teacher/[id]/page.tsx
"use client"; // ถ้าต้องการใช้ client components เช่น Zustand store
import StudentDetail from "../../components/StudentDetail";
import { useParams } from "next/navigation";

export default function StudentDetailPage() {
  const params = useParams(); // ดึง id จาก route
  if (!params?.id) return <div>ไม่พบ ID นักเรียน</div>;

  return (
    <div className="p-8">
      <StudentDetail studentId={params.id} />
    </div>
  );
}
