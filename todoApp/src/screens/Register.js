import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";

const Register = ({ navigation, route }) => {
	const [avatar, setAvatar] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleImage = () => {
		navigation.navigate("camera");
	};

	const handleRegister = () => {};

	useEffect(() => {
		if (route.params) {
			if (route.params.image) {
				setAvatar(route.params.image);
			}
		}
	}, [route]);

	return (
		<View
			style={{
				backgroundColor: "#fff",
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Avatar.Image
				size={100}
				source={{ uri: avatar ? avatar : null }}
				style={{ backgroundColor: "#900" }}
			/>
			<TouchableOpacity onPress={handleImage}>
				<Text style={{ color: "#900" }}>Change Photo</Text>
			</TouchableOpacity>

			<View style={{ width: "70%" }}>
				<TextInput
					style={Styles.input}
					placeholder="Name"
					value={name}
					onChangeText={setName}
				/>
				<TextInput
					style={Styles.input}
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
				/>
				<TextInput
					secureTextEntry
					style={Styles.input}
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
				/>
			</View>
			<Button
				onPress={handleRegister}
				disabled={!name || !email || !password}
				style={Styles.btn}
			>
				<Text style={{ color: "#fff" }}>Register</Text>
			</Button>
			<TouchableOpacity onPress={() => navigation.navigate("login")}>
				<Text
					style={{
						color: "#900",
						height: 30,
						margin: 20,
					}}
				>
					Have an Account, Login
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Register;

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
