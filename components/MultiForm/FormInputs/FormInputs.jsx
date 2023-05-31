import { useState } from "react";
import { MultiFormStore } from "@/store/MultiFormStore";

import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import Addons from "../Addons/Addons";
import Summary from "../Summary/Summary";
import styles from "./FormInputs.module.scss";

const FormInputs = () => {
  const formStep = MultiFormStore((state) => state.formStepNumber);

  const renderFormInput = () => {
    switch (formStep) {
      case 0:
        return <PersonalInfo />;

      case 1:
        return <SelectPlan />;

      case 2:
        return <Addons />;

      case 3:
        return <Summary />;

      default:
        return <PersonalInfo />;
    }
  };

  const handleNext = () => {
    
  }

  return (
    <div className={styles["form-input-container"]}>
      {renderFormInput()}
      <div className={styles["nav-buttons"]}>
        <p className={styles["back_btn"]}>Go Back</p>
        <button className={styles["progress__button"]}>Next Step</button>
      </div>
    </div>
  );
};

export default FormInputs;
