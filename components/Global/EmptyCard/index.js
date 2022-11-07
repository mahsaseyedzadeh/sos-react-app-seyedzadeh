import styles from './EmptyCard.module.scss';

const EmptyCard = ({ message }) => {
  return (
    <div className={styles.card}>
      {message}
    </div>
  )
}
export default EmptyCard;
