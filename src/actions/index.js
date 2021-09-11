import history from "../history";

export const logoutRequest = () => {
    return {
        type: 'USER_LOGGED_OUT'
    }
}

export const loginSuccess = (token, status, message) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token: token,
            status: status,
            message: message
        }
    }
}

export const loginFailure = (status, message) => {
    return {
        type: 'LOGIN_FAILURE',
        payload: {
            status: status,
            message: message
        }
    }
}

/* export const signUpFailure = (status, message) => {
    return {
        type: 'SIGNUP_FAILURE',
        payload: {
            status: status,
            message: message
        }
    }
} */

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const receiveData = (data, status) => {
    return {
        type: 'RECEIVE_DATA',
        payload: {
            data: data,
            status: status
        }
    }
}

export const loginUser = (username, password) => {
    return (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": username,
                "password": password
            })
        };
        return fetch('http://localhost:3001/api/v1/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                try {
                    dispatch(loginSuccess(data.body.token, data.status, data.message));
                    dispatch(accessProfile(data.body.token));
                } catch(e) {
                    dispatch(loginFailure(data.status, data.message));
                }
            })
            .catch(error => {
                dispatch(loginFailure(error));
            })
    }
}

export const accessProfile = (token) => {
    return (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        };
        return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            .then(response => response.json())
            .then(data => {
                dispatch(receiveData(data.body, data.status));
                history.push(`/user/${(data.body.firstName).toLowerCase()}`);
            })
            .catch(error => {
                if(error.response.status === 401) {
                  dispatch(loginFailure(error));
                }
            })
       }
}

export const modifyName = (token, newFirstName, newLastName) => {
    return (dispatch) => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "firstName": newFirstName,
                "lastName": newLastName
            })
        };
        return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            .then(response => response.json())
            .then(data => {
                dispatch(receiveData(data.body, data.status));
                dispatch(logoutRequest());
                history.push(`/sign-in`);
            })
            .catch(error => {
                if (error.response.status !== 200) {
                    dispatch(loginFailure(error))
                }
        })
    }
}

export const signUpUser = (email, password, firstName, lastName) => {
    return (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "firstName": firstName,
                "lastName": lastName
            })
        };
        return fetch('http://localhost:3001/api/v1/user/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    dispatch(logoutRequest())
                    history.push(`/sign-in`);
                } else {
                    dispatch(loginFailure(data.status, data.message));
                }
                
            })
            .catch(error => {
                if (error.response.status !== 200) {
                    dispatch(loginFailure(error))
                }
        })
    }
}