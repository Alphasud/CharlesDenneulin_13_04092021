import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function SignInForm() {

    useEffect(() => {
      document.title = "Argent Bank - Sign In"
  }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');
    const history = useHistory();

    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        /* console.log('Username: ', username);
        console.log('Password: ', password); */
        if (data.status === 200) {
            history.push({
                pathname: '/auth',
                state: data.body.token
            });
        }
        setUsername('');
        setPassword('');
    };
    
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": username,
                "password": password
            })
        };
        fetch('http://localhost:3001/api/v1/user/login', requestOptions)
            .then(response => response.json())
            .then(data => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username, password]);

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            placeholder="User Name"
                            name="username"
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUserNameChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </>
        )
}

export default SignInForm;