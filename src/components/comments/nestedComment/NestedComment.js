import React, { FC } from "react";
import s from "./NestedComment.module.css";
import reply from "../../../img/reply.svg";
import moment from "moment";
import LikeCounter from "../likeCounter/LikeCounter";
import Favourites from "../favourites/Favourites";

const NestedComment = ({ comment, replies, currentUserId, parentId }) => {
  const createdAt = `
  ${moment(new Date(comment.createdAt)).format("DD.MM")}   ${moment(
    new Date(comment.createdAt)
  ).format("HH:mm")}`;

  return (
    <>
      <div className={s.nested_comment}>
        <img className={s.comment_photo} src={comment.photo} alt="It`s me" />
        <div>
          <div className={s.nameInner}>
            <div className={s.nested_reply}>
              <div className={s.name}>MyUsername</div>
              <button className={s.reply}>
                <span>
                  <img src={reply} alt="reply" />
                </span>
                {comment.username}
              </button>
              <span className="comment_time">{createdAt}</span>
            </div>
          </div>
          <div className={s.nested_text}>{comment.body}</div>
          <div className={s.nested_btns}>
            <Favourites favourites={comment.favourites} />
            <div className="likesInner">
              <LikeCounter likes={comment.likes} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NestedComment;
