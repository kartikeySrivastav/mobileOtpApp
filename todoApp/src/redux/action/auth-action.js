import axios from "axios";
import {
	loginRequest,
	loginSuccess,
	loginFailure,
	loadUserRequest,
	loadUserSuccess,
	loadUserFailure,
} from "./action"; // Correct import

const serverUrl = "http://localhost:3260/api/user";

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch(loginRequest()); // Use action creator
		const response = await axios.post(
			`${serverUrl}/login`,
			{ email, password },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log("Response from login API:", response);
		if (response.data) {
			dispatch(loginSuccess(response.data)); // Use action creator
		} else {
			dispatch(loginFailure("Invalid response from the server.")); // Use action creator
		}
	} catch (error) {
		dispatch(
			loginFailure(error.response?.data?.message || "An error occurred.")
		); // Use action creator
	}
};

// export const loadUser = () => async (dispatch) => {
// 	try {
// 		dispatch(loadUserRequest()); // Use action creator
// 		const { data } = await axios.get(`${serverUrl}/profile`);
// 		dispatch(loadUserSuccess(data)); // Use action creator
// 	} catch (error) {
// 		dispatch(
// 			loadUserFailure(
// 				error.response?.data?.message || "An error occurred."
// 			)
// 		); // Use action creator
// 	}
// };
