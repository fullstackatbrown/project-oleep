import styles from "./NewsletterCard.module.css";

interface NewsletterCardProps {
    date: string;
    title: string;
    description: string;
  }
  
const NewsletterCard: React.FC<NewsletterCardProps> = ({ date, title, description }) => {
    return (
      <div className={styles.card}>
        <div className={styles.dateTag}>{date}</div>
        <div className={styles.imagePlaceholder}></div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    );
};
export default NewsletterCard;
  