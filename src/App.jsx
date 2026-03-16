import { useState } from "react";
import MemoList from "./components/MemoList";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);
  const [viewMode, setViewMode] = useState("memoList");

  return (
    <div>
      <h1>React Memo App</h1>
      <MemoList memos={memos} viewMode={viewMode} />
    </div>
  );
}

export default App;
