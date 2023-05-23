import { create } from "zustand";

const initialValues = [
  { id: 0, name: "", email: "", phone: "" },
  { id: 1, option: null, planType: "monthly" },
  { id: 2, addons: [] },
];

export const MultiFormStore = create((set) => ({
  formStepNumber: 3,
  formData: initialValues,

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
