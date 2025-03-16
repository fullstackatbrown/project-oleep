"use client";

import { useState } from "react";
import styles from "./FilterDropdown.module.css";

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All news");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.filterButton} onClick={() => setIsOpen((prev) => !prev)}>
        {selectedOption}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div className={`${styles.dropdownMenu} ${isOpen ? styles.show : ""}`}>
        <p className={styles.option} onClick={() => handleSelect("All news")}>
          All news
        </p>
        <p className={styles.option} onClick={() => handleSelect("Local news")}>
          Local news
        </p>
      </div>
    </div>
  );
};

export default FilterDropdown;