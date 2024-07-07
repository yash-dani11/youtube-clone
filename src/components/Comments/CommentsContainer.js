import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addComments } from "../../redux/commentsSlice";
import fetchComments from "./fetchComments";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Comment from "./Comment";
const CommentsContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const commentRef = useRef();
  const allComments = useSelector(
    (state) => state.comments?.videoComments?.[id]
  );
  const commentsList = allComments?.comments;
  const commentsToken = allComments?.token;

  const storeComments = useCallback(async () => {
    const data = await fetchComments(id, commentsToken);
    dispatch(addComments(data));
  }, [id, commentsToken]);
  useInfiniteScroll(storeComments, commentRef, commentsList);

  const comments = commentsList?.map((comment, index) => (
    <Comment
      details={comment}
      key={comment.id}
      ref={index === commentsList.length - 4 ? commentRef : null}
      index = {index}
    ></Comment>
  ));
  return <div className="mt-10 mb-4">{comments}</div>;
};

export default CommentsContainer;
