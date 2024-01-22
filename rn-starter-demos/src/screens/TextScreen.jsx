import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
export default TextScreen = () => {
  const [password, setPassword] = useState("");
  function handleInputChange() {}
  return (
    <View>
      <Text>enter passkey</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>must be longer than 4 chars</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
