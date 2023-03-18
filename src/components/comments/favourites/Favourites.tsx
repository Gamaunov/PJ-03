import heart_empty from "../../../img/heart-empty.svg";
import heart_fill from "../../../img/heart-fill.svg";
import { FC, useState } from "react";

const Favourites: FC = (props: any) => {
  const backFState = () => {
    if (props.favourites === false) {
      return "В избранное";
    } else {
      return "В избранном";
    }
  };
  const backFStatePhoto = () => {
    if (props.favourites === false) {
      return heart_empty;
    } else {
      return heart_fill;
    }
  };

  const [fState, setFState] = useState(backFState());
  const [fStatePhoto, setFStatePhoto] = useState(backFStatePhoto());

  const changeFState = () => {
    if (fState === "В избранное") {
      setFState("В избранном");
    } else {
      setFState("В избранное");
    }
  };

  const changeFStatePhoto = () => {
    if (fState === "В избранное") {
      setFStatePhoto(heart_fill);
    } else {
      setFStatePhoto(heart_empty);
    }
  };
  return (
    <button
      onClick={() => {
        changeFStatePhoto();
        changeFState();
      }}
      className="favourites-btn"
    >
      <span>
        <img className="favourites-img" src={fStatePhoto} alt="Heart" />
      </span>
      {fState}
    </button>
  );
};

export default Favourites;
