function Memo({ memo }) {
  const [memoTitle] = memo.content.split("\n")[0];

  return (
    <div>
      <h2>{memoTitle}</h2>
    </div>
  );
}

export default Memo;
