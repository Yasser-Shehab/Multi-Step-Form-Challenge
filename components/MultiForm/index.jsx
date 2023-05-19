import React from "react";
import styles from "./index.module.scss";
import FormSteps from "./FormSteps/FormSteps";
import FormInputs from "./FormInputs/FormInputs";

const MultiForm = () => {
  return (
    <section className={styles["form-container"]}>
      <div className={styles["form"]}>
        <FormSteps />
        <FormInputs />
      </div>
    </section>
  );
};

export default MultiForm;
