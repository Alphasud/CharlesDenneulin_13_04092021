const userReducer = (state = {status: '' , email: '', firstName: '', lastName: ''}, action) => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            return state = {
                status: action.payload.status,
                email: action.payload.data.email,
                firstName: action.payload.data.firstName,
                lastName: action.payload.data.lastName
            };
        default:
            return state;
    }
}
 
export default userReducer;