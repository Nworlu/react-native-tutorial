import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  function addGoalHandler(enteredText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItems
                onDelete={deleteGoalHandler}
                id={itemData.item.id}
                text={itemData.item.text}
              />
            );
          }}
          keyExtractor={(item, index) => {
            console.log(item);
            console.log(index);
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
