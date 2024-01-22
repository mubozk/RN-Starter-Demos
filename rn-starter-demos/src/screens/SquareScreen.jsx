import React, { useReducer } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import ColorCounter from "../components/ColorCounter";
import ColorReducer from "../reducers/ColorReducer";
const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -15;
export default SquareScreen = () => {
  initialState = {
    red: 0,
    green: 0,
    blue: 0,
  };
  const [state, dispatch] = useReducer(ColorReducer, initialState);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onDecrease={() => {
          dispatch({ type: "red", payload: COLOR_DECREMENT });
        }}
        onIncrease={() => {
          dispatch({ type: "red", payload: COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Green"
        onDecrease={() => {
          dispatch({ type: "green", payload: COLOR_DECREMENT });
        }}
        onIncrease={() => {
          dispatch({ type: "green", payload: COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="Blue"
        onDecrease={() => {
          dispatch({ type: "blue", payload: COLOR_DECREMENT });
        }}
        onIncrease={() => {
          dispatch({ type: "blue", payload: COLOR_INCREMENT });
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
