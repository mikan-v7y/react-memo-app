import { useState } from "react";
import Memo from "../Memo";
import "./MemoDetail.css";

function MemoDetail({ selectedMemo, onSave, onDelete, onBack }) {
  const [content, setContent] = useState(selectedMemo.content);

  const handleSaveClick = () => {
    const trimmedContent = content.trim();
    if (trimmedContent.length === 0) {
      alert("1文字以上入力してください");
      return;
    }
    onSave(trimmedContent);
    onBack();
  };

  return (
    <div className="memo-detail">
      <textarea
        className="memo-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="memo-buttons">
        <button onClick={handleSaveClick}>保存</button>
        <button onClick={onDelete}>削除</button>
        <button onClick={onBack}>戻る</button>
      </div>
    </div>
  );
}

export default MemoDetail;
