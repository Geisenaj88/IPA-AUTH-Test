import { UserActionTypes } from './user.types'

export const setCurrentUser = (user) => {
	return (dispatch) => {
		dispatch({
			type: UserActionTypes.SET_CURRENT_USER,
			payload: user
		})
	}
}