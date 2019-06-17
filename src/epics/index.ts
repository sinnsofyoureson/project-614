import "rxjs/add/operator/switchMap";
import { combineEpics } from "redux-observable";
import axios from 'axios';
import {
	USER_LOGIN,
	userLoginSuccess,
	userLoginFailure
} from '../actions';

function loginEpic(action$: any) {
	return action$
		.ofType(USER_LOGIN)
		.switchMap((data: any) => {
			return axios.post('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
				email: data.payload.email,
				password: data.payload.password
			})
			.then((response) => {
				return userLoginSuccess(response.data);
			})
			.catch((error) => {
				return userLoginFailure(error.response.data.error);
			})
		})
};

export const rootEpic = combineEpics(
	loginEpic
);