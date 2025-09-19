"use client"; // ต้อง client เพราะ StudentDetail ใช้ Zustand store
import StudentDetail from "../../components/StudentDetail";
import { useParams } from "next/navigation";

export default function StudentDetailPage() {
  const params = useParams();

  // เช็คก่อนว่า params.id มีค่าและเป็น string
  const studentId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  if (!studentId) return <div>ไม่พบ ID นักเรียน</div>;

  return (
    <div className="p-8">
      <StudentDetail studentId={studentId} />
    </div>
  );
}
