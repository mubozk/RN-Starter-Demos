import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  parentStyle: {
    // borderWidth: 3,
    borderColor: "black",
    flexDirection: 'row',
    height: 200,
    alignItems: 'flex-start',
    justifyContent: 'space-between'

  },
  textOneStyle: {
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 9,
    height: 50,
    width: 50,
    backgroundColor: 'green',
    // alignSelf: 'center'
  },
  textTwoStyle: {
    // borderWidth: 3,
    // borderColor: "red",
    backgroundColor: 'red',
    top: 50,
    // flex: 2,
    // top: 10,
    // left: 10,
    height: 50,
    width: 50,
    // ...StyleSheet.absoluteFillObject,

    // position: 'absolute'
  },
  textThreeStyle: {
    // borderWidth: 3,
    // borderColor: "red",
    // flex: 3,
    height: 50,
    width: 50,
    backgroundColor: 'blue'
  },
});
