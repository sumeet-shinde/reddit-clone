import "./style.css";
import { Header } from "./Components/Header";
import { BoardHeader } from "./Components/BoardHeader";
import { PostForm } from "./Components/PostForm";
import { AuthModel } from "./Components/AuthModel";

function App() {
  return (
    <div>
      <Header />
      <AuthModel />
      <BoardHeader />
      <PostForm />
      <div className="px-6 bg-reddit_dark text-reddit_text">
        <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
          <h5 className="text-reddit_text-darker text-sm mb-1">
            Posted by u/test123 5 hours ago
          </h5>
          <h2 className="text-xl mb-3">Test</h2>
          <div className="text-sm leading-6">
            <p>Hi my name is Sumeet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
