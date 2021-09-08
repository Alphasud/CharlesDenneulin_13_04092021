const loginReducer = (state = {token: '',  status:'', statusText: ''}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return state = {
                token: action.payload.token,
                status: 200,
                statusText: 'Successfully logged in.'
            }
        case 'LOGIN_FAILURE':
            return state = {
                token: null,
                status: action.payload.status,
                statusText: action.payload.statusText
            }
        case 'LOGIN_USER_REQUEST':
            return console.log('LOGIN USER REQUEST');
        default:
            return state;
    }
};

export default loginReducer;