import StudentTable from '../components/StudentTable';

export default function TeacherDashboard() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
        <h2 className="text-2xl font-bold mb-4 text-center ">Lecturer</h2>
        <StudentTable />
    </div>
  );
}
