import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const {postId} = useParams()

  const handleGoBack = () =>{
      navigate(`/posts`)
  }
  const {id, title, body} = post;
  console.log(postId)
  return (
    <div>
      <h2>Id: {id}</h2>
      <h3>Title:{title}</h3>
      <p>Detail: {body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;
