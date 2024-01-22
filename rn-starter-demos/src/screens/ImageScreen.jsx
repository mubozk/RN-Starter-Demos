import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import "../components/ImageDetail.jsx";
import ImageDetail from "../components/ImageDetail.jsx";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="firstTitle"
        imgPath={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="secondTitle"
        imgPath={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="thirdTitle"
        imgPath={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 100,
  },
});

export default ImageScreen;
