function Memo({ memo, viewMode }) {
  const [memoTitle, ...memoContent] = memo.content.split("\n");

  return (
    <div>
      <h2>{memoTitle}</h2>
      {viewMode === "memoDetail" && <p>{memoContent.join("\n")}</p>}
    </div>
  );
}

export default Memo;
