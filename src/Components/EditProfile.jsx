import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProfile() {

    const history = useHistory();
    const location = useLocation();

    /* const data = location.state; */
    const token = location.tokenNum;

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');

    const handleFirstNameChange = (event) => {
        setNewFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setNewLastName(event.target.value);
    }

    const [dataResponse, setDataResponse] = useState('');

    useEffect(() => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "firstName": newFirstName,
                "LastName": newLastName
            })
        };
        fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            .then(response => response.json())
            .then(data => setDataResponse(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newFirstName, newLastName]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (dataResponse.status === 200) {
            history.push({
                pathname: `/user/${newFirstName}`,
            });
        }
    };

    return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">First Name</label>
                        <input
                            placeholder="First Name"
                            name="firstName"
                            type="text"
                            id="firstName"
                            value={newFirstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            placeholder="Last Name"
                            name="lastName"
                            type="text"
                            id="lastName"
                            value={newLastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                    <button className="sign-in-button" type="submit">Edit</button>
                </form>
            </>
        )
}

export default EditProfile;