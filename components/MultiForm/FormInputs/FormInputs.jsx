import { useState } from "react";
import { MultiFormStore } from "@/store/MultiFormStore";

const FormInputs = () => {
  const formStep = MultiFormStore((state) => state.formStepNumber);
  console.log({ formStep });

  return <div>FormInputs</div>;
};

export default FormInputs;
