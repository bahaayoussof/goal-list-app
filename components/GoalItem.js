import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = props => {
	return (
		<View onPress={props.onPressGoal} style={styles.goalItem}>
			<Pressable
				// android_ripple={{ color: "#1f0b3a" }}
				onPress={props.onDeleteGoal.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 5,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "#fff",
		padding: 8,
	},
	pressedItem: {
		opacity: 0.5,
	},
});
