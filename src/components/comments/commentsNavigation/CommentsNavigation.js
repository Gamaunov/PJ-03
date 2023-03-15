import s from "./CommentsNavigation.module.css";
import heartCircle from "../../../img/heart-circle.png";
import DropDown from "../dropDown/DropDown";
import { useState } from "react";
import { useEffect } from "react";
import { getComments as getCommentsApi } from "../../../api";

const CommentsNavigation = () => {
  const [commentsCount, setCommentsCount] = useState(0);
  useEffect(() => {
    getCommentsApi().then((data) => {
      setCommentsCount(data.length);
    });
  }, []);
  return (
    <>
      <div className={s.comments_menu}>
        <div className={s.commentsAmount}>
          Комментарии
          <span className={s.commentsAmount_count}>({commentsCount})</span>
        </div>
        <div className={s.dropdown}>
          <DropDown
            onOptionClick={(option) => console.log(option)}
            options={[
              "По дате",
              "По количеству оценок",
              "По актуальности",
              "По количеству ответов",
            ]}
          />
        </div>
        <div className={s.liked}>
          Избранное
          <span className={s.liked_img}>
            <img src={heartCircle} alt="Избранное" />
          </span>
        </div>
      </div>
    </>
  );
};

export default CommentsNavigation;
