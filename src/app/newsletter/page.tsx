import NewsletterCard from "./NewsletterCard";
import styles from "./Newsletter.module.css";
import FilterDropdown from "./FilterDropdown";

export default function Newsletter() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletters</h1>
      <FilterDropdown/>      
      <div className={styles.grid}>
      <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
        url = "https://google.com"
        imageUrl="https://picsum.photos/200"
      />
      <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
        url = "https://google.com"
        imageUrl="https://picsum.photos/200"
      />
      <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
        url = "https://google.com"
        imageUrl="https://picsum.photos/200"
      />
      <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
        url = "https://google.com"
        imageUrl="https://picsum.photos/200"
      />
            <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
        url = "https://google.com"
        imageUrl="https://picsum.photos/200"
      />
            <NewsletterCard 
        date="1.1.2025" 
        title="Example Newsletter Title" 
        description="Exciting newsletter description here exciting newsletter description here" 
        url = "https://google.com"
        imageUrl="https://picsum.photos/200"
      />

    </div>
    </div>
  );
}

