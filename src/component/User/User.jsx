

const User = ({user}) => {
    const{id, name, email, phone}= user;
    const userStyle = {
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'20px'
        
    }
    return (
        <div  style={userStyle}>
            <h2>{id}</h2>
            <h3>{name}</h3>
            <h4>{phone}</h4>
            <h5>{email}</h5>
        </div>
    );
};

export default User;