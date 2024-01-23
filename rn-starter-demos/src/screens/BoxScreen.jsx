import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-around',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
