import StudentDetail from "../../components/StudentDetail";

interface Props {
  params: { id: string };
}

export default function StudentDetailPage({ params }: Props) {
  return (
    <div className="p-8">
      <StudentDetail studentId={params.id} />
    </div>
  );
}
