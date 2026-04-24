import "./MemoList.css";
import Memo from "../Memo";

function MemoList({ memos, setSelectedMemo, onAddMemo }) {
  return (
    <div>
      <button className="button" onClick={onAddMemo}>
        新規メモ作成
      </button>

      <ul className="memo-list">
        {memos.map((memo) => (
          <li key={memo.id} className="memo-item">
            <Memo memo={memo} onClick={() => setSelectedMemo(memo)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemoList;
