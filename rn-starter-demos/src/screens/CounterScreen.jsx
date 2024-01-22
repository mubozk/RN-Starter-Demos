import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import CounterReducer from "../reducers/CounterReducer";
export default CounterScreen = () => {
  const [state, dispatch] = useReducer(CounterReducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Text>{counter}</Text>
      <Button
        title="+"
        onPress={() => {
          dispatch({ type: "INCREMENT" });
        }}
      />
      <Button
        title="-"
        onPress={() => {
          dispatch({ type: "DECREMENT" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
