import React, { useState } from "react";
import {
  View,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import ColorReducer from "../reducers/ColorReducer";
export default ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});
