"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Student } from "../store/studentStore";
import useStudentStore from "../store/studentStore";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

export default function StudentForm() {
  const addStudent = useStudentStore((state) => state.addStudent);
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    school: "",
    gpa: "",
    skills: "",
    reason: "",
    major: "",
    university: "",
    photo: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, photo: e.target.files ? e.target.files[0] : null });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.gpa) {
      alert("กรุณากรอกชื่อ, นามสกุล และ GPA");
      return;
    }

    const photoUrl = form.photo ? URL.createObjectURL(form.photo) : "";

    const newStudent: Student = {
      id: uuidv4(),
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      phone: form.phone,
      school: form.school,
      gpa: parseFloat(form.gpa),
      skills: form.skills,
      reason: form.reason,
      major: form.major,
      university: form.university,
      photo: photoUrl,
      activities: [],
      awards: [],
      works: [],
    };

    addStudent(newStudent);
    router.push("/success");
    setForm({
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      school: "",
      gpa: "",
      skills: "",
      reason: "",
      major: "",
      university: "",
      photo: null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto p-6 border border-gray-300 rounded-xl shadow-md bg-white text-gray-400"
    >
      <input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="ชื่อ"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <input
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="นามสกุล"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <input
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="ที่อยู่"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="หมายเลขโทรศัพท์"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <input
        name="school"
        value={form.school}
        onChange={handleChange}
        placeholder="โรงเรียน"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <input
        name="gpa"
        value={form.gpa}
        onChange={handleChange}
        placeholder="GPA"
        type="number"
        step="0.01"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <textarea
        name="skills"
        value={form.skills}
        onChange={handleChange}
        placeholder="ความสามารถพิเศษ"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <textarea
        name="reason"
        value={form.reason}
        onChange={handleChange}
        placeholder="เหตุผลในการสมัคร"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <input
        name="major"
        value={form.major}
        onChange={handleChange}
        placeholder="สาขาที่เลือก"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
      <input
        name="university"
        value={form.university}
        onChange={handleChange}
        placeholder="มหาวิทยาลัย"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />

      {/* Upload รูป */}
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-400"
      />

      {form.photo && (
        <div className="relative w-32 h-32 mt-2">
          <Image
            src={URL.createObjectURL(form.photo)}
            alt="preview"
            fill
            className="object-cover rounded-md border"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        บันทึก Portfolio
      </button>
    </form>
  );
}
