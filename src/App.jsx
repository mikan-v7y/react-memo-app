import { useState } from "react";
import MemoList from "./components/MemoList";
import MemoDetail from "./components/MemoDetail";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <div>
      <h1>React Memo App</h1>

      {selectedMemo ? (
        <MemoDetail
          selectedMemo={selectedMemo}
          onBack={() => setSelectedMemo(null)}
        />
      ) : (
        <MemoList memos={memos} />
      )}
    </div>
  );
}

export default App;
