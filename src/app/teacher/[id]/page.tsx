// src/app/teacher/[id]/page.tsx
import StudentDetail from "../../components/StudentDetail";

export default function StudentDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <StudentDetail studentId={params.id} />
    </div>
  );
}
