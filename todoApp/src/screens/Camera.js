import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

const CameraComponent = ({ navigation }) => {
	const [type, setType] = useState(CameraType.back);
	const [hasPermission, setHasPermission] = useState(null);
	const [camera, setCamera] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	const openImagePickerAsync = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult.granted === false) {
			alert("Permisson to access camera roll is required");
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			const data = result.assets[0];
			return navigation.navigate("register", {
				image: data.uri,
			});
		}
	};

	const clickPicture = async () => {
		const data = await camera.takePictureAsync();
		return navigation.navigate("register", { image: data.uri });
	};

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to Camera</Text>;
	}

	return (
		<View style={{ flex: 1 }}>
			<Camera
				type={type}
				style={{ flex: 1, aspectRatio: 1 }}
				ratio="1:1"
				ref={(e) => setCamera(e)}
			/>
			<View
				style={{
					flexDirection: "row",
					position: "absolute",
					bottom: 10,
					justifyContent: "space-evenly",
					width: "100%",
				}}
			>
				<Icon
					name="image"
					size={40}
					color="#fff"
					onPress={openImagePickerAsync}
				/>
				<Icon
					name="camera"
					size={40}
					color="#fff"
					onPress={clickPicture}
				/>
				<Icon
					name="flip-camera-android"
					size={40}
					color="#fff"
					onPress={() =>
						setType(
							type === CameraType.back
								? CameraType.front
								: CameraType.back
						)
					}
				/>
			</View>
		</View>
	);
};

export default CameraComponent;
