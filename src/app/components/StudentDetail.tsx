"use client";
import useStudentStore, { Student } from "../store/studentStore";

interface Props {
  studentId: string;
}

export default function StudentDetail({ studentId }: Props) {
  const student = useStudentStore((state) =>
    state.students.find((s) => s.id === studentId)
  );

  if (!student) {
    return (
      <div className="text-center text-red-600 bg-red-50 border border-red-200 rounded-xl p-8 mx-auto max-w-md text-lg backdrop-blur-sm">
        <p>ไม่พบข้อมูลนักเรียน</p>
      </div>
    );
  }

  const getGpaColor = (gpa: number) => {
    if (gpa >= 3.5) return "text-red-600 font-bold";
    if (gpa >= 2.5) return "text-orange-600 font-bold";
    return "text-green-600 font-bold";
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-xl border-2 border-blue-200/50 rounded-2xl shadow-2xl space-y-6">
      {/* หัวเรื่อง: ใส่สีฟอนต์ตรงนี้ได้ */}
      <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
        {/* หรือจะใช้สีแบบกำหนดเอง เช่น text-blue-600 */}
        {student.firstName} {student.lastName}
      </h2>

      <div className="flex justify-center mb-8">
        {student.photo ? (
          <img
            src={student.photo}
            alt={`${student.firstName} ${student.lastName}`}
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-300/60 shadow-xl"
          />
        ) : (
          <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center border-4">
            <span className="text-gray-500 text-5xl">👤</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/70 p-4 rounded-xl border">
          <span className="block text-sm font-semibold mb-1 text-blue-700">ที่อยู่</span>
          <p className="text-slate-700">{student.address}</p>
        </div>

        <div className="bg-white/70 p-4 rounded-xl border">
          <span className="block text-sm font-semibold mb-1 text-blue-700">เบอร์โทรศัพท์</span>
          <p className="text-slate-700">{student.phone}</p>
        </div>

        <div className="bg-white/70 p-4 rounded-xl border">
          <span className="block text-sm font-semibold mb-1 text-blue-700">โรงเรียน</span>
          <p className="text-slate-700">{student.school}</p>
        </div>

        <div className="bg-white/70 p-4 rounded-xl border">
          <span className="block text-sm font-semibold mb-1 text-blue-700">GPA</span>
          <p className={getGpaColor(student.gpa)}>{student.gpa.toFixed(2)}</p>
        </div>

        <div className="md:col-span-2 bg-white/70 p-4 rounded-xl border">
          <span className="block text-sm font-semibold mb-1 text-blue-700">ความสามารถพิเศษ</span>
          <p className="text-slate-700">{student.skills}</p>
        </div>

        <div className="md:col-span-2 bg-white/70 p-4 rounded-xl border">
          <span className="block text-sm font-semibold mb-1 text-blue-700">เหตุผลในการสมัคร</span>
          <p className="text-slate-700">{student.reason}</p>
        </div>

        <div className="bg-white/70 p-4 rounded-xl border">
          <span className="block text-sm font-semibold mb-1 text-blue-700">สาขาที่เลือก</span>
          <p className="text-slate-700">{student.major}</p>
        </div>

        <div className="bg-white/70 p-4 rounded-xl border">
          <span className="block text-sm font-semibold mb-1 text-blue-700">มหาวิทยาลัย</span>
          <p className="text-slate-700">{student.university}</p>
        </div>
      </div>
    </div>
  );
}
