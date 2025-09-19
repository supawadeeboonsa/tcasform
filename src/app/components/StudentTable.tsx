// components/StudentTable.tsx
"use client";
import useStudentStore, { Student } from "../store/studentStore";
import Link from "next/link";
import { useState } from "react";

export default function StudentTable() {
  const students = useStudentStore((state) => state.students);
  const [sortAsc, setSortAsc] = useState(true);

  const sortedStudents = [...students].sort(
    (a, b) => (sortAsc ? a.gpa - b.gpa : b.gpa - a.gpa)
  );

  const getGpaStyle = (gpa: number) => {
    if (gpa >= 3.5) return "text-red-600 font-bold bg-red-50";
    if (gpa >= 2.5) return "text-orange-600 font-bold bg-orange-50";
    return "text-green-600 font-bold bg-green-50";
  };

  const getGpaIcon = (gpa: number) => {
    if (gpa >= 3.5) return "🌟";
    if (gpa >= 2.5) return "⭐";
    return "💪";
  };

  return (
    <div className="w-full min-h-screen p-4 flex justify-center items-start">
      <div className="w-full max-w-[98%] flex flex-col flex-grow mt-4 mb-4">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-blue-200/50 overflow-hidden flex flex-col flex-grow">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white text-center">
              📊 ตารางข้อมูลนักเรียน
            </h2>
            <p className="text-blue-100 text-center mt-2">
              จำนวนนักเรียนทั้งหมด: {students.length} คน
            </p>
          </div>

          {/* Table */}
          <div className="overflow-auto flex-grow p-4">
            <table className="w-full table-auto">
              <thead className="sticky top-0 z-10 bg-gradient-to-r from-gray-50 to-blue-50 border-b-2 border-blue-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200">
                    👤 ชื่อ-นามสกุล
                  </th>
                  <th
                    className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200 cursor-pointer hover:bg-blue-100 transition-colors duration-200 select-none"
                    onClick={() => setSortAsc(!sortAsc)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>📈 GPA</span>
                      <span
                        className={`text-lg transition-transform duration-300 ${
                          !sortAsc ? "rotate-180" : ""
                        }`}
                      >
                        ↑
                      </span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider">
                    🔍 รายละเอียด
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedStudents.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-gray-500 text-lg">
                      <div className="flex flex-col items-center space-y-3">
                        <span className="text-4xl">📝</span>
                        <span>ยังไม่มีข้อมูลนักเรียน</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  sortedStudents.map((s: Student, index: number) => (
                    <tr
                      key={s.id}
                      className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300 hover:shadow-md group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap border-r border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                              {s.firstName} {s.lastName}
                            </div>
                            <div className="text-xs text-gray-500">{s.school}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center border-r border-gray-100">
                        <div
                          className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-semibold ${getGpaStyle(
                            s.gpa
                          )}`}
                        >
                          <span>{getGpaIcon(s.gpa)}</span>
                          <span>{s.gpa.toFixed(2)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <Link
                          href={`/teacher/${s.id}`}
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium text-sm rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <span>👁️</span>
                          <span>ดูรายละเอียด</span>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-gray-50/50 px-6 py-4 border-t border-gray-200 mt-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <div className="text-sm text-gray-600">
                💡 คลิกที่หัวข้อ GPA เพื่อเรียงลำดับ
              </div>
              <div className="text-sm text-gray-600">
                📊 เรียงตาม GPA: {sortAsc ? "น้อยไปมาก" : "มากไปน้อย"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
