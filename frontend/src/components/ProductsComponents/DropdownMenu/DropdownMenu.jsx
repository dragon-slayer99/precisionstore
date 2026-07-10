import { useState } from "react";
import styles from "../Products/Products.module.css";

function DropdownMenu({ optionsList }) {

  const [toggled, setToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ text: "FEATURED", value: "FEATURED" })

  function handleOptionSelection(value) {
    setSelectedOption(value);
    setToggled((toggled) => !toggled);
  }

  return (
    <div className={styles.sortDropdownWrapper}>
      <button
        className={styles.btnTool}
        id="sortTrigger"
        aria-haspopup="listbox"
        onClick={() => setToggled((toggled) => !toggled)}
        aria-expanded={toggled ? "true" : "false"}
      >
        SORT: {selectedOption.text}
        <span className={styles.indicatorArrow}></span>
      </button>

      <ul className={toggled ? `${styles.dropdownPanel} ${styles.visibleDisplay}` : styles.dropdownPanel} id="sortDropdownPanel" role="listbox">
        {optionsList.map(({ text, value }) => (
          <li
            className={selectedOption.value === value ? `${styles.dropdownOption} ${styles.active}` : styles.dropdownOption}
            role="option"
            aria-selected={selectedOption === value ? "true" : "false"}
            data-value={value}
            key={value}
            onClick={() => handleOptionSelection({ text: text, value: value })}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
