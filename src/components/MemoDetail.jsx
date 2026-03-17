import Memo from "./Memo";

function MemoDetail({ selectedMemo, onBack }) {
  const [memoTitle, ...memoContent] = selectedMemo.content.split("\n");

  return (
    <div>
      <h2>{memoTitle}</h2>
      <p>{memoContent.join("\n")}</p>
      <button onClick={onBack}>一覧画面に戻る</button>
    </div>
  );
}

export default MemoDetail;
