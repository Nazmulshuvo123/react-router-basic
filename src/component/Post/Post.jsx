import { Link } from "react-router-dom";


const Post = ({post}) => {
    const postStyle ={
        border: '2px solid tomato',
        borderRadius: '10px',
        padding: '10px',
    }
    const {id, title, body} = post;
    return (
        <div style={postStyle}>
            <h2>UserId: {id}</h2>
            <h4>Title: {title}</h4> 
            <p>{body}</p>
            <Link to ={`/post/${id}`}>Details</Link>
        </div>
    );
};

export default Post;