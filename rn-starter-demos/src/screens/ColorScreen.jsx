import React, { useState } from "react";
import {
  View,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
export default ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />

      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: randomRGB() }}
            />
          );
        }}
      />
    </View>
  );
};
const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  //   return `rgb(${red}, ${green}, ${blue})`;
  return "rgb(" + red + "," + green + "," + blue + ")";
};

const styles = StyleSheet.create({});
