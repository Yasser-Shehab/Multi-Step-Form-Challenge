import React from "react";
import styles from "./index.module.scss";
import FormSteps from "./FormSteps/FormSteps";

const MultiForm = () => {
 


  return (
    <section className={styles["form-container"]}>
      <div className={styles["form"]}>
        <FormSteps />

      </div>
    </section>
  );
};

export default MultiForm;
