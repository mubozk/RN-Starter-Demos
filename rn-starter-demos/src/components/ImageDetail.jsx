import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imgPath} />
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
});

export default ImageDetail;
