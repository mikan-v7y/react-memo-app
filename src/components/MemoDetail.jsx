import { useState } from "react";
import Memo from "./Memo";

function MemoDetail({ selectedMemo, onSave, onDelete, onBack }) {
  const [content, setContent] = useState(selectedMemo.content);

  const handleSaveClick = () => {
    if (!content) {
      alert("1文字以上入力してください");
      return;
    }
    onSave(content);
    onBack();
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSaveClick}>保存</button>
      <button onClick={onDelete}>このメモを削除</button>
      <button onClick={onBack}>一覧画面に戻る</button>
    </div>
  );
}

export default MemoDetail;
