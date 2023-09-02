import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Footer from "./src/components/Footer";
import Profile from "./src/screens/Profile";
import Register from "./src/screens/Register";
import Camera from "./src/screens/Camera";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
	const { isAuthenticated, loading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(loadUser());
	// }, [dispatch]);

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={isAuthenticated ? "home" : "login"}
			>
				<Stack.Screen
					name="home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="register"
					component={Register}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="camera"
					component={Camera}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="profile" component={Profile} />
			</Stack.Navigator>
			<Footer />
		</NavigationContainer>
	);
};

export default Main;
