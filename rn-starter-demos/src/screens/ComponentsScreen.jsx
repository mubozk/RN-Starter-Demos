import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const ComponentsScreen = () => {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="type here"/>
        <Button title="Click Click" />
      </View>
      <View>
        <Text>
        Test Text
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    margin: 20,
    padding: 50,
  },
});

export default ComponentsScreen;
