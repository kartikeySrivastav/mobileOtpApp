import {
	View,
	Text,
	SafeAreaView,
	Platform,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import Task from "../components/Task";
import Icon from "react-native-vector-icons/Entypo";
import { Dialog, Button } from "react-native-paper";

const Home = ({ navigation }) => {
	const tasks = [
		{
			title: "task 1",
			description: "Sample task 1",
			completed: true,
			_id: "ighdfghfvghgdhgvhfgjhg",
		},
		{
			title: "task 2",
			description: "Sample task 2",
			completed: false,
			_id: "ighdfghfvghgdhgvhfbhfgjhg",
		},
	];

	const [openDialog, setOpenDialog] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const hideDialog = () => {
		setOpenDialog(!openDialog);
	};

	const addTaskHandler = () => {
		console.log(title, description);
		console.log("task added");
	};
	return (
		<>
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					paddingTop:
						Platform.OS === "android" ? StatusBar.currentHeight : 0,
				}}
			>
				<ScrollView>
					<SafeAreaView>
						<Text style={styles.heading}>All Tasks</Text>
						{tasks.map((item, index) => (
							<Task
								key={index}
								title={item.title}
								description={item.description}
								status={item.completed}
								taskId={item._id}
							/>
						))}
						<TouchableOpacity
							style={styles.addBtn}
							onPress={hideDialog}
						>
							<Icon name="add-to-list" size={20} color="#900" />
						</TouchableOpacity>
					</SafeAreaView>
				</ScrollView>
			</View>
			<Dialog visible={openDialog} onDismiss={hideDialog}>
				<Dialog.Title>Add A task</Dialog.Title>
				<Dialog.Content>
					<TextInput
						style={styles.input}
						placeholder="Title"
						value={title}
						onChangeText={setTitle}
					/>
					<TextInput
						style={styles.input}
						placeholder="Description"
						value={description}
						onChangeText={setDescription}
					/>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<TouchableOpacity onPress={hideDialog}>
							<Text>Cancel</Text>
						</TouchableOpacity>
						<Button onPress={addTaskHandler}>Add</Button>
					</View>
				</Dialog.Content>
			</Dialog>
		</>
	);
};

export default Home;

const styles = StyleSheet.create({
	heading: {
		fontSize: 28,
		textAlign: "center",
		backgroundColor: "#474747",
		color: "#fff",
		padding: 10,
		marginBottom: 20,
	},
	addBtn: {
		backgroundColor: "#fff",
		width: 150,
		height: 50,
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		elevation: 5,
		borderRadius: 50,
		marginTop: 15,
		marginBottom: 30,
	},
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
});
