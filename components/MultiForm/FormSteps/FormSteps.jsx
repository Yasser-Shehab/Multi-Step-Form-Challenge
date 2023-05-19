import styles from "./FormSteps.module.scss";

const FormSteps = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.formSteps}>
        <div className={styles["list-container"]}>
          <li>
            <div className={styles["circled-number"]}>1</div>
          </li>
          <li>
            <div className={styles["circled-number"]}>2</div>
          </li>
          <li>
            <div className={styles["circled-number"]}>3</div>
          </li>
          <li>
            <div className={styles["circled-number"]}>4</div>
          </li>
        </div>
      </div>
    </aside>
  );
};

export default FormSteps;
