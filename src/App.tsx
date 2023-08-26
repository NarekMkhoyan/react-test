import { useState } from "react";
import styles from "./App.module.scss";
import AddUser from "./components/AddUser/AddUser";
import Card from "./components/Card/Card";
import { IUser } from "./interfaces/user.interface";
import UsersList from "./components/UsersList/UsersList";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const addNewUser: (newUser: IUser) => void = (newUser: IUser) => {
    setUsers((existingUsers: IUser[]) => [...existingUsers, newUser]);
  };

  const handleErrorMsg: (errorMsg: string) => void = (errorMsg: string) => {
    setErrorMsg(() => errorMsg);
  };

  const resetErrorMsg: () => void = () => {
    setErrorMsg(() => "");
  };

  return (
    <div className={styles["app-wrapper"]}>
      <Card>
        <AddUser onAddNewUser={addNewUser} onHandleError={handleErrorMsg} />
      </Card>
      <Card>
        <UsersList users={users} />
      </Card>
      <Modal errorMsg={errorMsg} onCloseModal={resetErrorMsg} />
    </div>
  );
};

export default App;
