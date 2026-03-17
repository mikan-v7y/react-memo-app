import Memo from "./Memo";

function MemoList({ memos }) {
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>
          <Memo memo={memo} />
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
