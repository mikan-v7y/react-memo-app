function Memo({ memo, onClick }) {
  return (
    <div onClick={onClick}>
      <h2>{memo.content.split("\n")[0]}</h2>
    </div>
  );
}

export default Memo;
