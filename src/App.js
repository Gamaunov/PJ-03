import "./App.css";
import Comments from "./components/comments/comments/Comments";
import CommentsNavigation from "./components/comments/commentsNavigation/CommentsNavigation";
const App = () => {

  return (
    <div className="App">
      {/*<Comments*/}
      {/*    commentsUrl="http://localhost:3004/comments"*/}
      {/*    currentUserId="1"*/}
      {/*/>*/}
      {/* <CommentForm /> */}
      <CommentsNavigation />
      <Comments currentUserId="1" />
    </div>
  );
};

export default App;
