import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          navigate("Components");
        }}
        title="go to components"
      />
      <Button
        onPress={() => {
          navigate("List");
        }}
        title="go to list"
      />
      <Button
        title="go ti images"
        onPress={() => {
          navigate("Image");
        }}
      />
      <Button
        title="go to counter"
        onPress={() => {
          navigate("Counter");
        }}
      />
      <Button
        title="go to color"
        onPress={() => {
          navigate("Color");
        }}
      />
      <Button
        title="go to square"
        onPress={() => {
          navigate("Square");
        }}
      />
      <Button
        title="go to text"
        onPress={() => {
          navigate("Text");
        }}
      />
      <Button
        title="go to boxa"
        onPress={() => {
          navigate("Box");
        }}
      />
      <Button
        title="go to donut"
        onPress={() => {
          navigate("Donut");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
