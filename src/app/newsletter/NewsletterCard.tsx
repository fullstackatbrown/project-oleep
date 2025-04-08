import styles from "./NewsletterCard.module.css";

interface NewsletterCardProps {
    date: string;
    title: string;
    url: string;
    imageUrl: string;
  }
  
const NewsletterCard: React.FC<NewsletterCardProps> = ({ date, title, url, imageUrl}) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
        <div className={styles.card}>
          <div className={styles.dateTag}>{date}</div>
          <div className={styles.imagePlaceholder}>
            <img src={imageUrl} alt={title} className={styles.image} />
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        </a>
    );
};
export default NewsletterCard;
  