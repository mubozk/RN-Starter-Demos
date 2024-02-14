// @src/App.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { useState } from "react";

const App = () => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  const leftToSpendAmount = 600;
  const targetAmount = 1000;

  const spentAmount = targetAmount - leftToSpendAmount;
  // const percentage = (spentAmount / targetAmount) * 100;
  const percentage = 30;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;
  const strokeDashoffsetFirst = strokeDashoffset / 3;

  const firstValPercentage = 15;
  const firstDashOffset =
    circleCircumference - (circleCircumference * 100) / 100;

  const secondValPercentage = 40;
  const secondDashOffset =
    circleCircumference - (circleCircumference * 85) / 100;

  const thirdValPercentage = 20;
  const thirdValOffset = circleCircumference - (circleCircumference * 45) / 100;

  const fourthValPercentage = 10;
  const fourthValOffset =
    circleCircumference - (circleCircumference * 25) / 100;

  const fifthValPercentage = 15;
  const fifthValOffset = circleCircumference - (circleCircumference * 15) / 100;

  const [perc, setPerc] = useState(100);

  function calculateDonutPercentage(inputPerc) {
    if (inputPerc > perc) {
      return;
    }
    setPerc(perc - inputPerc);
    const theOffS = circleCircumference - (circleCircumference * perc) / 100;
  }

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="300" width="300" viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="blue"
              fill="transparent"
              strokeWidth="15"
              strokeDasharray={circleCircumference}
              strokeDashoffset={firstDashOffset}
              // strokeLinecap="round"
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="grey"
              fill="transparent"
              strokeWidth="20"
              strokeDasharray={circleCircumference}
              strokeDashoffset={secondDashOffset}
              // strokeLinecap="round"
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="cyan"
              fill="transparent"
              strokeWidth="25"
              strokeDasharray={circleCircumference}
              strokeDashoffset={thirdValOffset}
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="yellow"
              fill="transparent"
              strokeWidth="35"
              strokeDasharray={circleCircumference}
              strokeDashoffset={fourthValOffset}
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="green"
              fill="transparent"
              strokeWidth="40"
              strokeDasharray={circleCircumference}
              strokeDashoffset={fifthValOffset}
            />
          </G>
        </Svg>
        <Text style={styles.text}></Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#394867",
  },
});
