import Name from "./Name";
import Image from "./Image";
import Quote from "./Quote";
import DeleteButton from "./DeleteButton";
import Like from "./Like";

const Character = (props) => {
  const { onDelete, characterDirection } = props;

  return (
    <>
      <div className="like-btn-container">
        <DeleteButton quoteText={props.quoteText} onDelete={onDelete} />
        <Like quoteText={props.quoteText} liked={props.liked} />
      </div>

      <div className="flex-container">
        {characterDirection === "Right" ? (
          <>
            <Name text={props.nameText} />
            <Quote text={props.quoteText} />
            <Image image={props.image} />
          </>
        ) : (
          <>
            <Image image={props.image} />
            <Name text={props.nameText} />
            <Quote text={props.quoteText} />
          </>
        )}
      </div>
    </>
  );
};

export default Character;
