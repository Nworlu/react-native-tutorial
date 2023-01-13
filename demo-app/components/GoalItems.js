import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItems(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "darkpurple" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "purple",
    margin: 8,
    borderRadius: 10,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
