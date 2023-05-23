import styles from "./Steps.module.scss";
import { MultiFormStore } from "@/store/MultiFormStore";

const Step = ({ step, title, index, id }) => {
  const stepNumber = id;
  const formStep = MultiFormStore((state) => state.formStepNumber);

  return (
    <li>
      <div
        className={`${styles["circled-number"]} ${formStep == index && styles["active--step"]}  `}
      >
        {stepNumber}
      </div>
      <div className={`${styles["step-info"]}`}>
        <span className={styles["step-number"]}>Step {stepNumber}</span>
        <span className={styles["step-name"]}>{title}</span>
      </div>
    </li>
  );
};

export default Step;
