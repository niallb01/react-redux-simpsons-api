const DeleteButton = (props) => {
  const { onDelete, quoteText } = props;
  return (
    <>
      <button
        className="delete-char"
        onClick={() => {
          onDelete(quoteText);
        }}
      >
        X
      </button>
    </>
  );
};

export default DeleteButton;
