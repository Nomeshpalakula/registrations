
export const courseTypes = [
  { id: 1, name: "Individual" },
  { id: 2, name: "Group" },
  { id: 3, name: "Special" },

];

export const courses = [
  { id: 1, name: "Hindi", typeId: 1 },
  { id: 2, name: "English", typeId: 1 },
  { id: 3, name: "Urdu", typeId: 2 },
];
export const courseOfferings = [
  { id: 1, courseId: 1, semester: "1st Semster 2025" },
  { id: 2, courseId: 2, semester: "2nd Semster 2025" },
  { id: 3, courseId: 3, semester: "3rd Semster 2025" }
];

export const registrations = [
  {
    id: 1,
    studentName: "John Doe",
    offeringId: 1,
    date: "2025-06-12",
  },
];