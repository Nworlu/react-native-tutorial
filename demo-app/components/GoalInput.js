import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    console.log(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textContainer}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        placeholder="Enter your goals"
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#cccc",
    borderBottomWidth: 1,
    flex: 1,
  },
  textContainer: {
    width: "70%",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ccccc",
    padding: 8,
  },
});
