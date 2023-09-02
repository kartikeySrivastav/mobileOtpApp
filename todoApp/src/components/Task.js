import { View, Text } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Checkbox } from "react-native-paper";

const Task = ({ title, description, status, taskId }) => {
	const [completed, setCompleted] = useState(status);
	const handleCheckbox = () => {
		setCompleted(!completed);
	};
	const deleteHandler = () => {};
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				padding: 10,
			}}
		>
			<View style={{ width: "70%" }}>
				<Text
					style={{ color: "#900", fontSize: 18, marginVertical: 7 }}
				>
					{title}
				</Text>
				<Text
					style={{
						color: "#4a4a4a",
						fontSize: 15,
					}}
				>
					{description}
				</Text>
			</View>
			<Checkbox
				status={completed ? "checked" : "unchecked"}
				color="#474747"
				onPress={handleCheckbox}
			/>
			<Icon
				name="delete"
				color="#fff"
				size={20}
				style={{
					backgroundColor: "#900",
					borderRadius: 100,
					padding: 10,
				}}
				onPress={deleteHandler}
			/>
		</View>
	);
};

export default Task;
