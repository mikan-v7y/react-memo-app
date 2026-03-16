import Memo from "./Memo";

function MemoList({ memos, viewMode }) {
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>
          <Memo memo={memo} viewMode={viewMode} />
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
