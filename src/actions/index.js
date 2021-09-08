//import { pushState } from 'redux-router';
import history from "../history";

export const getUserInfo = (user) => {
    return {
        type: 'RECEIVE_DATA',
        payload: user
    };
};
export const loginUserRequest = () => {
    return {
        type: 'LOGIN_USER_REQUEST'
    }
}

export const loginSuccess = (token) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token: token
        }
    }
}

export const loginFailure = (error) => {
    return {
        type: 'LOGIN_FAILURE',
        payload: {
            status: error.response.status,
            statusText: error.response.statusText
        }
    }
}

export const loginUser = (user) => {
    return (dispatch) => {
        dispatch(loginUserRequest);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": user[0],
                "password": user[1]
            })
        };
        return fetch('http://localhost:3001/api/v1/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                try {
                    dispatch(loginSuccess(data.body.token));
                    dispatch(accessProfile(data.body.token));
                } catch (e) {
                    dispatch(loginFailure(
                        {
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginFailure(error));
            })
    }
}

export const fetchProfileDataRequest = () => {
    return {
        type: 'FETCH_PROFILE_DATA_REQUEST'
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

export const accessProfile = (token) => {
    return (dispatch, state) => {
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
                history.push(`/user/${data.body.firstName}`);
            })
            .catch(error => {
                if(error.response.status === 401) {
                  dispatch(loginFailure(error));
                }
            })
       }
}