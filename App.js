import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const newGoalHandler = () => {
		setShowModal(true);
	};

	const closeModalHandler = () => {
		setShowModal(false);
	};

	const addGoalHandler = enteredGoalText => {
		setCourseGoals(currentGoal => [
			...currentGoal,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		closeModalHandler();
	};

	const deleteGoalHandler = id => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== id);
		});
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button title="Add New Goal" onPress={newGoalHandler} color="#b180f0" />
				<GoalInput
					placeholder="Your Course goal..."
					onAddGoal={addGoalHandler}
					visible={showModal}
					onCancel={closeModalHandler}
				/>
				<View style={styles.goalContainer}>
					<FlatList
						data={courseGoals}
						renderItem={itemData => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteGoal={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item, _) => {
							return item.id;
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalContainer: {
		flex: 5,
	},
});
