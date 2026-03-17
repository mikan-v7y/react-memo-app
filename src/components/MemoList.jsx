import Memo from "./Memo";

function MemoList({ memos, setSelectedMemo, onAddMemo }) {
  return (
    <div>
      <button onClick={onAddMemo}>新規メモ作成</button>

      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <Memo memo={memo} onClick={() => setSelectedMemo(memo)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemoList;
