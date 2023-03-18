import { useState } from "react";
import s from "./CommentForm.module.css";
import photo_3 from "../../../img/person/p-3.jpg";
import setInputHeight from "../setInputHeight";

const CommentForm = ({ handleSubmit, initialText = "" }) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0 || text.length > 1000;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  const [symbolsCount, setSymbolsCount] = useState("Макс. 1000 символов");
  const [displayMessage, setDisplayMessage] = useState("none");

  const showMessage = (e) => {
    if (+e > 1000) {
      setDisplayMessage("block");
    } else {
      setDisplayMessage("none");
    }
  };

  return (
    <>
      <div className={s.commentInput}>
        <img className={s.comment_photo} src={photo_3} alt="It`s me" />
        <div className={s.formInner}>
          <div className={s.nameInner}>
            <div className={s.comment_name}>
              <span>MyUsername</span>
            </div>
            <div className={s.countInner}>
              <span className={s.commentInput_symbols}>{symbolsCount}</span>
              <span
                style={{ display: displayMessage }}
                className={s.checkSymbolsCount}
              >
                Слишком длинное сообщение
              </span>
            </div>
          </div>
          <form onSubmit={onSubmit} className={s.form}>
            <textarea
              value={text}
              minLength="1"
              maxLength="1005"
              onChange={(e) => {
                setSymbolsCount(`${e.target.value.length}/1000`);
                setText(e.target.value);
                showMessage(e.target.value.length);
                setInputHeight(e, "61px");
              }}
              className={s.textarea}
              placeholder="Введите текст сообщения..."
            ></textarea>
            <button
              className={s.commentInput_btn}
              disabled={isTextareaDisabled}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
