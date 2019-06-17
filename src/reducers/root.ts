import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT } from '../actions';

interface IState {
	users: any[],
	isLoading: boolean,
	error: boolean,
	errorMessage: string
}

const initialState: IState = {
	users: [],
  isLoading: false,
	error: false,
	errorMessage: ''
};

export default function epicReducer(state = initialState, action: any) {
	switch (action.type) {
		case USER_LOGIN: 
			return {
				...state,
				isLoading: true
			}
		case USER_LOGIN_SUCCESS:
			return {
				users: [
					{
						id: state.users.length + 1,
						name: action.payload.name,
						avatar: action.payload.photoUrl
					}
				],
				isLoading: false,
				error: false,
				errorMessage: ''
			}
		case USER_LOGIN_FAILURE:
			return {
				...state,
				isLoading:false,
				error: true,
				errorMessage: action.payload
			}
		case USER_LOGOUT:
			return {
				...state,
				users: []
			}
		default:
			return state
	}
}