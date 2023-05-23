import styles from "./FormSteps.module.scss";
import Step from "../Step/Step";
import { stepData } from "@/data/data";

const FormSteps = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.formSteps}>
        <div className={styles["list-container"]}>
          {stepData.map((item, index) => {
            return <Step key={item.id} id={item.id} index={index} title={item.title} />;
          })}
        </div>
      </div>
    </aside>
  );
};

export default FormSteps;
