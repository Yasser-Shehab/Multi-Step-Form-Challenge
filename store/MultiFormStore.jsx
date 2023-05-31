import { create } from "zustand";

const initialValues = [
  { id: 0, name: "", email: "", phone: "" },
  { id: 1, option: null, planType: "monthly" },
  { id: 2, addons: [] },
];

export const MultiFormStore = create((set, get) => ({
  formStepNumber: 0,
  personalInfo: {
    id: 0,
    name: "",
    email: "",
    phone: "",
  },
  planType: {
    id: 1,
    option: null,
    planType: "monthly",
  },
  addons: {
    id: 2,
    addons: [],
  },

  setUserData: () => {
    set({ formStepNumber: formStepNumber + 1 });
  },
  setFormData: (formNewValues) => {
    set({ formData: formNewValues });
  },
  resetForm: () => {
    set({ formData: initialValues });
  },
}));
