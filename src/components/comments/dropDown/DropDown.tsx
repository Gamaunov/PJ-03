import s from "./DropDown.module.css";
import arrowUp from "../../../img/caret-up.svg";
import arrowDown from "../../../img/caret-down.svg";
import check from "../../../img/check.svg";
import { FC, useState } from "react";

const DropDown: FC<{
  options: string[];
  onOptionClick: (option: string) => void;
}> = ({ options, onOptionClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={s.dropdown}>
      <button onClick={() => setIsExpanded(!isExpanded)} className={s.dropbtn}>
        По количеству оценок
        <span className={s.drop_arrow}>
          <img
            className={s.drop_img}
            src={isExpanded ? arrowUp : arrowDown}
            alt="Arrow"
          />
        </span>
      </button>
      {isExpanded && (
        <div className={s.dropItemsInner}>
          <div className={s.dropItems}>
            {options.map((option) => (
              <div
                className={s.dropItem}
                onClick={() => {
                  setIsExpanded(false);
                  onOptionClick(option);
                }}
                key={option}
              >
                <img className={s.checkBox} src={check} alt="check box" />{" "}
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
