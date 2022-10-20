import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

const GoalInput = props => {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	const goalInputHandler = enteredText => {
		setEnteredGoalText(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	};

	return (
		<Modal visible={props.visible} animationType={"fade"}>
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require("../assets/images/goal.png")} />
				<TextInput
					style={styles.inputText}
					placeholder={props.placeholder}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} color="#f31282" />
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},
	image: {
		width: 100,
		height: 100,
		margin: 16,
	},
	inputText: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		borderRadius: 10,
		color: "#120438",
		width: "100%",
		padding: 12,
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 16,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
