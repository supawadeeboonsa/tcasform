// src/app/teacher/[id]/page.tsx
import StudentDetail from "@/app/components/StudentDetail";

interface Props {
  params: {
    id: string; // ต้องตรงกับชื่อไฟล์ [id]
  };
}

// Async Server Component (Next.js จะ handle ให้)
export default async function StudentDetailPage({ params }: Props) {
  return (
    <div className="p-8">
      <StudentDetail studentId={params.id} />
    </div>
  );
}
