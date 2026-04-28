import { useState } from "react";
import MemoList from "./components/MemoList/MemoList";
import MemoDetail from "./components/MemoDetail/MemoDetail";
import "./App.css";
import AuthContext from "./contexts/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [memos, setMemos] = useState(() => {
    const savedMemo = localStorage.getItem("memos");
    if (savedMemo) {
      return JSON.parse(savedMemo);
    } else {
      localStorage.setItem("memos", JSON.stringify([]));
      return [];
    }
  });
  const [selectedMemo, setSelectedMemo] = useState(null);

  const handleSaveMemo = (content) => {
    if (selectedMemo.id === null) {
      const newMemo = {
        id: Date.now(),
        content: content,
      };

      const updatedMemos = [...memos, newMemo];
      setMemos(updatedMemos);
      localStorage.setItem("memos", JSON.stringify(updatedMemos));
    } else {
      const updatedMemos = memos.map((memo) =>
        memo.id === selectedMemo.id ? { ...memo, content: content } : memo,
      );

      setMemos(updatedMemos);
      localStorage.setItem("memos", JSON.stringify(updatedMemos));
    }
  };

  const handleAddMemo = () => {
    setSelectedMemo({ id: null, content: "" });
  };

  const handleDeleteMemo = () => {
    const updatedMemos = memos.filter((memo) => memo.id !== selectedMemo.id);

    setMemos(updatedMemos);
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
    setSelectedMemo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <div>
        <h1>React Memo App</h1>

        {selectedMemo ? (
          <MemoDetail
            selectedMemo={selectedMemo}
            onSave={handleSaveMemo}
            onDelete={handleDeleteMemo}
            onBack={() => setSelectedMemo(null)}
          />
        ) : (
          <MemoList
            memos={memos}
            setSelectedMemo={setSelectedMemo}
            onAddMemo={handleAddMemo}
          />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
