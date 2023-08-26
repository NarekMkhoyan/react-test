import { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "../../interfaces/user.interface";
import styles from "./AddUser.module.scss";

interface IAddUserProps {
  onAddNewUser: (user: IUser) => void;
  onHandleError: (errorMsg: string) => void;
}

const AddUser: (props: IAddUserProps) => JSX.Element = (props: IAddUserProps) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const handleUserNameChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(() => event.target.value);
  };

  const handleUserAgeChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setUserAge(() => event.target.value);
  };

  const submiteHandler: (event: FormEvent<HTMLFormElement>) => void = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userName || !userAge) {
      props.onHandleError("Username and age are required!");
      return;
    }
    if (+userAge < 0) {
      props.onHandleError("User's age can't be a negative number.");
      return;
    }
    props.onAddNewUser({
      name: userName,
      age: +userAge,
      id: Math.random() * 1000000,
    });
    setUserName(() => "");
    setUserAge(() => "");
  };

  return (
    <form onSubmit={submiteHandler}>
      <div className={styles.form}>
        <div className={styles["form__item"]}>
          <div className={styles["form__item_label"]}>Username</div>
          <div className={styles["form__item_control"]}>
            <input type="text" value={userName} onChange={handleUserNameChange} />
          </div>
        </div>
        <div className={styles["form__item"]}>
          <div className={styles["form__item_label"]}>Age</div>
          <div className={styles["form__item_control"]}>
            <input type="number" value={userAge} onChange={handleUserAgeChange} />
          </div>
        </div>
        <div className={styles["submit"]}>
          <button type="submit" className={styles["submit-btn"]}>
            Add user
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
