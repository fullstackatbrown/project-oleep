import Image from "next/image";
import styles from "./NewsletterCard.module.css";

interface NewsletterCardProps {
  date: string;
  title: string;
  url: string;
  imageUrl: string;
  description: string;
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({ date, title, url, imageUrl, description }) => {
  return (
    <div className={styles.card}>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
        <div className={styles.dateTag}>{date}</div>
        <div className={styles.imagePlaceholder}>
          <Image src={imageUrl} alt={title} className={styles.image} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </a>
    </div>
  );
};
export default NewsletterCard;
