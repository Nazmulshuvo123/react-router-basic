import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const postStyle ={
        border: '2px solid tomato',
        borderRadius: '10px',
        padding: '10px',
    }
    const {id, title, body} = post;

    const navigate = useNavigate();
    
    const handleShowDetail = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>UserId: {id}</h2>
            <h4>Title: {title}</h4> 
            <p>{body}</p>
            {/* <Link to ={`/post/${id}`}>Details</Link> */}
            <button onClick={handleShowDetail}>Click For Details</button>
        </div>
    );
};

export default Post;