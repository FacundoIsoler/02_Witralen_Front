import axios from 'axios';

export const LOGIN_ADMIN = 'LOGIN_ADMIN'



//_____________________________log in de admin_____________________________//


export const logInUser = (userData) => {
    return async function (dispatch) {
        try {
            const response = await axios.post("http://localhost:3000/user/authUser", userData);
            return dispatch({
                type: LOGIN_ADMIN,
                payload: response.data
            });
        } catch (error) {
            console.error('Error login user:', error);
        }
    }
};