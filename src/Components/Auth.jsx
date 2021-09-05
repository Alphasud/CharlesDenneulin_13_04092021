import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

function Auth() {
    const location = useLocation();
    const token = location.state;

    const history = useHistory();

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
    
    if (data.status === 200) {
            history.push({
                pathname: `/user/${data.body.firstName}`,
                state: data,
                tokenNum: token
            });
        }
    return (
        <>
           <div>ERROR WITH AUTHENTICATION TOKEN</div>
        </>
    )
}

export default Auth;