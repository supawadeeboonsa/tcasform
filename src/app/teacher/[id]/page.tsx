import StudentDetail from "../../components/StudentDetail";

interface PageProps {
  params: { id: string };
}

export default function StudentDetailPage({ params }: PageProps) {
  return (
    <div className="p-8">
      <StudentDetail studentId={params.id} />
    </div>
  );
}
