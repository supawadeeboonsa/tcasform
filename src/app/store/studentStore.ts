import { create } from "zustand";

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  school: string;
  gpa: number;
  skills: string;
  reason: string;
  major: string;
  university: string;
  photo?: string;       // เก็บ URL หรือ base64 ของรูป
  activities?: string[];
  awards?: string[];
  works?: string[];
}

interface StudentStore {
  students: Student[];
  addStudent: (student: Student) => void;
}

const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  addStudent: (student) =>
    set((state) => ({ students: [...state.students, student] })),
}));

export default useStudentStore;
