import CommentForm from "../commentForm/CommentForm";
import s from "./Comment.module.css";
import reply from "../../../img/reply.svg";
import NesstedComment from "../nestedComment/NesstedComment";
import moment from "moment";
import LikeCounter from "../likeCounter/LikeCounter";
import Favourites from "../favourites/Favourites";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const replyId = parentId ? parentId : comment.id;

  const createdAt = `
  ${moment(new Date(comment.createdAt)).format("DD.MM")}   ${moment(
    new Date(comment.createdAt)
  ).format("HH:mm")}`;
  return (
    <>
      <div className={s.commentComplete}>
        <img
          className={s.comment_photo}
          src={comment.photo ? comment.photo : comment.defaultPhoto}
          alt="It`s me"
        />
        <div>
          <div className={s.comment_name}>
            {comment.username}
            <span className="comment_time">{createdAt}</span>
          </div>
          <div className={s.comment_text}>{comment.body}</div>
          <div className={s.comment__btns}>
            <button
              className={s.reply}
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              <span>
                <img src={reply} alt="reply" />
              </span>
              Ответить
            </button>
            <Favourites favourites={comment.favourites} />
            <div className="likesInner">
              <LikeCounter likes={comment.likes} />
            </div>
          </div>
        </div>
      </div>
      {isReplying && (
        <CommentForm
          submitLabel="Отправить"
          handleSubmit={(text) => addComment(text, replyId)}
        />
      )}
      {replies.length > 0 && (
        <>
          {replies.map((reply) => (
            <NesstedComment
              comment={reply}
              key={reply.id}
              replies={[]}
              currentUserId={currentUserId}
              parentId={comment.id}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Comment;
