import s from "./LikeCounter.module.css";
import { FC, useState } from "react";

interface LikeCounterProps {
  likes: string;
  likeCount: string;
}

const LikeCounter: FC<LikeCounterProps> = (props) => {
  const likesFromApi = props.likes || 0;
  const [likeCount, setLikeCount] = useState(likesFromApi);
  const increaseLike = () => {
    setLikeCount(+likeCount + 1);
  };
  const decreaseLike = () => {
    setLikeCount(+likeCount - 1);
  };
  const [counterColor, setCounterColor] = useState("#8AC540");

  localStorage.setItem("like", JSON.stringify(likeCount));
  const changeCounterColorM = () => {
    if (+likeCount - 1 < 0) {
      setCounterColor("#fb0000");
    }
  };
  const changeCounterColorP = () => {
    if (+likeCount + 1 >= 0) {
      setCounterColor("#8AC540");
    }
  };
  return (
    <>
      <button
        onClick={() => {
          changeCounterColorM();
          decreaseLike();
        }}
        className={s.likesBtn}
        style={{ color: "#FF0000" }}
      >
        -
      </button>
      <div className={s.count} style={{ color: counterColor }}>
        {likeCount}
      </div>
      <button
        onClick={() => {
          increaseLike();
          changeCounterColorP();
        }}
        className={s.likesBtn}
        style={{ color: "#8AC540" }}
      >
        +
      </button>
    </>
  );
};

export default LikeCounter;
