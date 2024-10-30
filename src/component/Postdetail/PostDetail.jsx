import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const {id, title, body} = post;
  return (
    <div>
      <h2>Id: {id}</h2>
      <h3>Title:{title}</h3>
      <p>Detail: {body}</p>
    </div>
  );
};

export default PostDetail;
