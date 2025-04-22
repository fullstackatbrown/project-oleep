import Image from "next/image";
import styles from "./RecentNewsletterCard.module.css";

interface RecentNewsletterCardProps {
    date: string;
    title: string;
    url: string;
    imageUrl: string;
    description: string;
}

const RecentNewsletterCard: React.FC<RecentNewsletterCardProps> = ({ date, title, url, imageUrl, description }) => {
    return (
        <div className={styles.card}>
                <div className={styles.dateTag}>{date}</div>
                <div className={styles.imagePlaceholder}>
                    <Image src={imageUrl} alt={title} className={styles.image} />
                </div>
                {/* <h3 className={styles.title}>{title}</h3> */}
                <p className={styles.description}>
                    {description.length > 100 ? description.slice(0, 79) + '...' : description}
                    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    <span className={styles.learnMore}>  <u>Learn more</u> </span>            
                    </a>
                </p>
        </div>
    );
};

export default RecentNewsletterCard; 