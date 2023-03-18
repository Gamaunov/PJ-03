import { FC, useEffect, useState } from "react";
import CommentForm from "../commentForm/CommentForm";
import Comment from "../comment/Comment";
import {
  createComment as createCommentApi,
  getComments as getCommentsApi,
} from "../../../api";
import s from "./Comments.module.css";

interface CommentsProps {
  commentsUrl: string;
  currentUserId: string;
}

const Comments: FC<CommentsProps> = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState<any[]>([]);
  const [activeComment, setActiveComment] = useState<
    any[] | (() => void) | null
  >(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId: number) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text: string, parentId: null | undefined) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className={s.comments}>
      <CommentForm initialText="" handleSubmit={addComment} />
      <div className={s.comments_container}>
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
