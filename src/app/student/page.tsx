import StudentForm from '../components/StudentForm';

export default function StudentPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center ">MYTCASS 69</h2>
        <StudentForm />
      </div>
    </div>
  );
}

