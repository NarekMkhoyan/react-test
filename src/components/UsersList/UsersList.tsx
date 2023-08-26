import { IUser } from "../../interfaces/user.interface";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.scss";

interface IUsersListProps {
  users: IUser[];
}

const UsersList: (props: IUsersListProps) => JSX.Element = (props: IUsersListProps) => {
  return (
    <div className={styles.users}>
      <div className={styles.title}>Users</div>
      <div className={styles.list}>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
