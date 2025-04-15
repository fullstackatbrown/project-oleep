"use client";

import { useState } from "react";
import NewsletterCard from "./NewsletterCard";
import RecentNewsletterCard from "./RecentNewsletterCard";
import styles from "./Newsletter.module.css";
import FilterDropdown from "./FilterDropdown";

interface Newsletter {
  date: string;
  title: string;
  contentURL: string;
  imageUrl: string;
  description: string;
}

interface NewsletterClientProps {
  newsletters: Newsletter[];
}

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  return `${Number(month)}.${Number(day)}.${year}`;
};

// Default export - full newsletter page version
export default function NewsletterClient({ newsletters }: NewsletterClientProps) {
  newsletters.sort((a: Newsletter, b: Newsletter) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const [visibleCount, setVisibleCount] = useState(3);
  const [sortOrder, setSortOrder] = useState("Newest");

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const sortedNewsletters = [...newsletters].sort((a: Newsletter, b: Newsletter) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (sortOrder === "Newest") {
      return dateB - dateA;
    }
    if (sortOrder === "Oldest") {
      return dateA - dateB;
    }
    if (sortOrder === "A-Z") {
      return titleA.localeCompare(titleB);
    }
    if (sortOrder === "Z-A") {
      return titleB.localeCompare(titleA);
    }
    return 0;
  });

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Newsletters</h1>
        <FilterDropdown selected={sortOrder} onChange={setSortOrder} />
      </div>
      <div className={styles.grid}>
        {sortedNewsletters.slice(0, visibleCount).map((newsletter, index) => (
          <div key={index} className={styles.item}>
            <NewsletterCard
              date={formatDate(newsletter.date)}
              title={newsletter.title}
              url={newsletter.contentURL}
              imageUrl={newsletter.imageUrl}
              description={newsletter.description}
            />
          </div>
        ))}
      </div>
      {visibleCount < newsletters.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

// Named export - simplified version for main page
export function RecentNewsletters({ newsletters }: NewsletterClientProps) {
  // Only show the 2 most recent newsletters
  const recentNewsletters = [...newsletters]
    .sort((a: Newsletter, b: Newsletter) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <div>
      <div className={styles["recent-newsletter-grid"]}>
        {recentNewsletters.map((newsletter, index) => (
          <div key={index} className={styles.item}>
            <RecentNewsletterCard
              date={formatDate(newsletter.date)}
              title={newsletter.title}
              url={newsletter.contentURL}
              imageUrl={newsletter.imageUrl}
              description={newsletter.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}