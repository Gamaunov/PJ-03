import Comments from "./components/comments/comments/Comments";
import CommentsNavigation from "./components/comments/commentsNavigation/CommentsNavigation";
const App = () => {
  return (
    <div className="App">
      <CommentsNavigation />
      <Comments currentUserId="1" />
    </div>
  );
};

export default App;
