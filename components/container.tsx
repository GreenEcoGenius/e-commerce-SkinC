import type { NextPage } from "next";
import InputAlt from "./input-alt";
import Button from "./button";
import styles from "./container.module.css";

export type ContainerType = {
  className?: string;
};

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <form className={[styles.container, className].join(" ")}>
      <div className={styles.header}>
        <h1 className={styles.logIn}>Log in</h1>
      </div>
      <div className={styles.inputs}>
        <InputAlt
          state="Default"
          placeholder
          icon={false}
          hint={false}
          label
          label1="Email address"
          placeholder1="johndoe@example.com"
        />
        <InputAlt
          state="Default"
          placeholder
          icon
          hint={false}
          label
          label1="Password"
          placeholder1="******************"
        />
        <div className={styles.forgotPassword}>Forgot password?</div>
      </div>
      <div className={styles.inputs}>
        <Button color="Dark" />
        <div className={styles.createAnAccount}>Create an account</div>
      </div>
    </form>
  );
};

export default Container;
