import { IUser } from "../../interfaces/user.interface";
import styles from "./UserItem.module.scss";

interface IUserItemProps {
  user: IUser;
}

const UserItem: (props: IUserItemProps) => JSX.Element = (props: IUserItemProps) => {
  return (
    <div className={styles.user}>
      <span>{props.user.name}</span>
      <span>{props.user.age}</span>
    </div>
  );
};

export default UserItem;
