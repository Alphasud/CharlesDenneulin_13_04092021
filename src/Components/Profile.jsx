import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

function Profile() {
    const location = useLocation();
    const token = location.state;
    console.log(token);

    const [data, setData] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        };
        fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            .then(response => response.json())
            .then(data => setData(data));
        setCount(count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    console.log(data);
    /* const firstName = data.body.firstName;
    const email = data.body.email;
    const lastName = data.body.lastName;
    console.log(firstName + email + lastName); */
    if(data.status === 200) return <UserProfile data={data} />
    return (
        <>
           <div>ERROR</div>
        </>
    )
}

export default Profile;