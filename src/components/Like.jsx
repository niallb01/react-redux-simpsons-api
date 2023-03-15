import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SET_LIKE } from "../features/counter/characterSlice";

const Like = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      className="like-btn"
      onClick={() => {
        dispatch(SET_LIKE({ liked: !props.liked, quote: props.quoteText }));
      }}
    >
      {props.liked ? (
        <span>
          <FaRegThumbsUp size="12" className="like-icon" />
          Liked
        </span>
      ) : (
        <span>
          <FaRegThumbsDown size="12" className="like-icon" />
          Disliked
        </span>
      )}
    </button>
  );
};

export default Like;
