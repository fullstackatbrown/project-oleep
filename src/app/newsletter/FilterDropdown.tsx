"use client";

import { useState } from "react";
import styles from "./FilterDropdown.module.css";

const FilterDropdown = ({ selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Newest");

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.filterButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div className={`${styles.dropdownMenu} ${isOpen ? styles.show : ""}`}>
        <p className={styles.option} onClick={() => handleSelect("Newest")}>
          Newest
        </p>
        <p className={styles.option} onClick={() => handleSelect("Oldest")}>
          Oldest
        </p>
        <p className={styles.option} onClick={() => handleSelect("A-Z")}>
          A-Z
        </p>
        <p className={styles.option} onClick={() => handleSelect("Z-A")}>
          Z-A
        </p>
      </div>
    </div>
  );
};

export default FilterDropdown;