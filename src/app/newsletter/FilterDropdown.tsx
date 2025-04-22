"use client";

import { useState } from "react";
import styles from "./FilterDropdown.module.css";

interface FilterDropdownProps {
  selected: string;
  onChange: (option: string) => void;
}

const FilterDropdown = ({ selected, onChange }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
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