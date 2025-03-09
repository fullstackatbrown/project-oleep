import NewsletterCard from "./NewsletterCard";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletters</h1>
      <button className={styles.filterButton}>Filter</button>
      <div className={styles.grid}>
      <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
      />
      <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
      />
      <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
      />
    </div>
    </div>
  );
}

