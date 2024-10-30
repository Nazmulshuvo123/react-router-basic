import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone, email} = user;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Phone: {phone}</h3>
            <h3>Email: {email}</h3>
        </div>
    );
};

export default UserDetails;