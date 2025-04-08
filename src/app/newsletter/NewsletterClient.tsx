"use client";

import { useState } from "react";
import NewsletterCard from "./NewsletterCard";
import styles from "./Newsletter.module.css";
import FilterDropdown from "./FilterDropdown";

export default function NewsletterClient({ newsletters }) {
  newsletters.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const [visibleCount, setVisibleCount] = useState(3);
  const [sortOrder, setSortOrder] = useState("Newest"); // ← track selected filter

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const sortedNewsletters = [...newsletters].sort((a, b) => {
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
      return titleA.localeCompare(titleB); // Alphabetical sorting A-Z
    }
    if (sortOrder === "Z-A") {
      return titleB.localeCompare(titleA); // Alphabetical sorting Z-A
    }
    return 0;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletters</h1>
      <FilterDropdown selected={sortOrder} onChange={setSortOrder} />

      <ul className={styles.grid}>
        {sortedNewsletters.slice(0, visibleCount).map((newsletter, index) => (
          <li key={index} className={styles.listItem}>
            <NewsletterCard
              date={newsletter.date}
              title={newsletter.title}
              url={newsletter.contentURL}
              imageUrl={newsletter.imageUrl}
            />
          </li>
        ))}
      </ul>

      {visibleCount < newsletters.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
