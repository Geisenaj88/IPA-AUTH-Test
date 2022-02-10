import { createSelector } from 'reselect'

const selectUser = state => state.userData

export const selectCurrentUser = createSelector(
	[selectUser],
	userData => userData.currentUser
)