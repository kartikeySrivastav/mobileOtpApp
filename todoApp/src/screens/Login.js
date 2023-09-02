import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/auth-action";

const Login = ({ navigation }) => {
	const dispatch = useDispatch();
	const { isAuthenticated, loading, error } = useSelector(
		(state) => state.auth
	);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		dispatch(login(email, password));
		console.log("login", email, password);
	};
	useEffect(() => {
		console.log(isAuthenticated);
		if (error) {
			alert(error);
			dispatch({ type: "clearError" });
		}
	}, [error, dispatch, alert, isAuthenticated]);
	return (
		<View
			style={{
				backgroundColor: "#fff",
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text>Welcome</Text>
			<View style={{ width: "80%", marginTop: 20 }}>
				<TextInput
					style={Styles.input}
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
				/>
				<TextInput
					style={Styles.input}
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
				/>
			</View>
			<Button
				onPress={handleLogin}
				disabled={!email || !password}
				style={Styles.btn}
			>
				<Text style={{ color: "#fff" }}>Login</Text>
			</Button>
			<Text style={{ marginTop: 20 }}>Or</Text>
			<TouchableOpacity onPress={() => navigation.navigate("register")}>
				<Text
					style={{
						color: "#900",
						height: 30,
						margin: 20,
					}}
				>
					Sign Up
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;

const Styles = StyleSheet.create({
	input: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#b5b5b5",
		borderRadius: 5,
		marginVertical: 10,
		fontSize: 15,
		padding: 10,
		paddingLeft: 15,
	},
	btn: {
		backgroundColor: "red",
		width: "70%",
		padding: 5,
		marginTop: 20,
	},
});
