import React from "react";
import styles from "./Card.module.scss";

interface ICardProps {
  children?: React.ReactNode;
}

const Card: (props: ICardProps) => JSX.Element = (props: ICardProps) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
