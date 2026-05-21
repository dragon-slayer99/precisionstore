import { useState } from "react";
import "./DropdownMenu.css";

function DropdownMenu({ optionsList }) {

    const [toggled, setToggled] = useState(false);
    const [selectedOption, setSelectedOption] = useState({ text: "FEATURED", value: "FEATURED" })

    function handleOptionSelection(value) {
        setSelectedOption(value);
        setToggled((toggled) => !toggled);
    }

  return (
    <div className="sort-dropdown-wrapper">
      <button
        className="btn-tool"
        id="sortTrigger"
        aria-haspopup="listbox"
        onClick={() => setToggled((toggled) => !toggled)}
        aria-expanded={toggled ? "true" : "false"}
      >
        SORT: {selectedOption.text}
        <span className="indicator-arrow">↓</span>
      </button>

      <ul className={toggled ? "dropdown-panel visible-display" : "dropdown-panel"} id="sortDropdownPanel" role="listbox">
        {optionsList.map(({text, value}) => (
          <li
            className={selectedOption.value === value ? "dropdown-option active" : "dropdown-option"}
            role="option"
            aria-selected={selectedOption === value ? "true" : "false"}
            data-value={value}
            key={value}
            onClick={() => handleOptionSelection({text: text, value: value})}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
