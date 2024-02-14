// @src/App.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { useState } from "react";

const App = () => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  const inputArr = [15, 40, 20, 10, 15];
  const colorsArr = ["#F1FADA", "#9AD0C2", "#2D9596", "#BBC3A4", "#265073"];

  function calculateDonutPercentage(inputArr) {
    let cumulativeOffset = 100;
    return inputArr.map((inputPerc, index) => {
      const offset =
        circleCircumference - (circleCircumference * cumulativeOffset) / 100;
      cumulativeOffset -= inputPerc;
      return drawCircle(offset, colorsArr[index], (index + 2) * 6);
    });
  }

  function drawCircle(offset, color, width) {
    return (
      <G rotation={-90} originX="90" originY="90">
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#f2f2f2" // current bg color
          fill="transparent"
          strokeWidth={width}
          strokeDasharray={circleCircumference}
          strokeDashoffset={offset}
          // strokeLinecap="round"
        />
        <Circle
          key={color}
          cx="50%"
          cy="50%"
          r={radius}
          stroke={color}
          fill="transparent"
          strokeWidth={width}
          strokeDasharray={circleCircumference - 5}
          strokeDashoffset={offset}
          // strokeLinecap="round"
        />
      </G>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.graphWrapper}>
        <Svg height="300" width="300" viewBox="0 0 180 180">
          {calculateDonutPercentage(inputArr)}
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
});

{
  /* <Circle
cx="50%"
cy="50%"
r={radius}
stroke="#F1FADA"
fill="transparent"
strokeWidth="15"
strokeDasharray={circleCircumference}
strokeDashoffset={firstDashOffset} //
// strokeLinecap="round"
/>
<Circle
cx="50%"
cy="50%"
r={radius}
stroke="#9AD0C2"
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
stroke="#2D9596"
fill="transparent"
strokeWidth="25"
strokeDasharray={circleCircumference}
strokeDashoffset={thirdValOffset}
/>
<Circle
cx="50%"
cy="50%"
r={radius}
stroke="#BBC3A4"
fill="transparent"
strokeWidth="35"
strokeDasharray={circleCircumference}
strokeDashoffset={fourthValOffset}
/>
<Circle
cx="50%"
cy="50%"
r={radius}
stroke="#265073"
fill="transparent"
strokeWidth="40"
strokeDasharray={circleCircumference}
strokeDashoffset={fifthValOffset}
/> */
}

// const leftToSpendAmount = 600;
// const targetAmount = 1000;

// const spentAmount = targetAmount - leftToSpendAmount;
// const percentage = (spentAmount / targetAmount) * 100;
// const percentage = 30;
// const strokeDashoffset =
//   circleCircumference - (circleCircumference * percentage) / 100;

// const firstValPercentage = 15;
// const firstDashOffset =
//   circleCircumference - (circleCircumference * 100) / 100;

// const secondValPercentage = 40;
// const secondDashOffset =
//   circleCircumference - (circleCircumference * 85) / 100;

// const thirdValPercentage = 20;
// const thirdValOffset = circleCircumference - (circleCircumference * 45) / 100;

// const fourthValPercentage = 10;
// const fourthValOffset =
//   circleCircumference - (circleCircumference * 25) / 100;

// const fifthValPercentage = 15;
// const fifthValOffset = circleCircumference - (circleCircumference * 15) / 100;

// text: {
//   position: "absolute",
//   textAlign: "center",
//   fontWeight: "600",
//   fontSize: 18,
//   color: "#394867",
// },
// function calculateDonutPercentage(inputArr) {
//   let i = 0;
//   while (i < inputArr.length) {
//     const inputPerc = inputArr[i];
//     if (inputPerc > perc) {
//       return;
//     }
//     setPerc(perc - inputPerc);
//     const theOffS = circleCircumference - (circleCircumference * perc) / 100;
//     drawCircle(theOffS);
//   }
// }
// // @src/App.js
// import React from "react";
// import { View, StyleSheet, Text } from "react-native";
// import Svg, { G, Circle } from "react-native-svg";
// import { useState } from "react";

// const App = () => {
//   const radius = 70;
//   const circleCircumference = 2 * Math.PI * radius;

//   const inputArr = [15, 40, 20, 10, 15];
//   const colorsArr = ["#F1FADA", "#9AD0C2", "#2D9596", "#BBC3A4", "#265073"];
//   const leftToSpendAmount = 600;
//   const targetAmount = 1000;

//   const spentAmount = targetAmount - leftToSpendAmount;
//   const percentage = (spentAmount / targetAmount) * 100;
//   // const percentage = 30;
//   const strokeDashoffset =
//     circleCircumference - (circleCircumference * percentage) / 100;

//   const firstValPercentage = 15;
//   const firstDashOffset =
//     circleCircumference - (circleCircumference * 100) / 100;

//   const secondValPercentage = 40;
//   const secondDashOffset =
//     circleCircumference - (circleCircumference * 85) / 100;

//   const thirdValPercentage = 20;
//   const thirdValOffset = circleCircumference - (circleCircumference * 45) / 100;

//   const fourthValPercentage = 10;
//   const fourthValOffset =
//     circleCircumference - (circleCircumference * 25) / 100;

//   const fifthValPercentage = 15;
//   const fifthValOffset = circleCircumference - (circleCircumference * 15) / 100;

//   function calculateDonutPercentage(inputArr) {
//     let i = 0;
//     while (i < inputArr.length) {
//       const inputPerc = inputArr[i];
//       if (inputPerc > perc) {
//         return;
//       }
//       setPerc(perc - inputPerc);
//       const theOffS = circleCircumference - (circleCircumference * perc) / 100;
//       drawCircle(theOffS);
//     }
//   }

//   function drawCircle(offset, color, width) {
//     return (
//       <Circle
//         key={color}
//         cx="50%"
//         cy="50%"
//         r={radius}
//         stroke={color}
//         fill="transparent"
//         strokeWidth={width}
//         strokeDasharray={circleCircumference}
//         strokeDashoffset={offset}
//         // strokeLinecap="round"
//       />
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.graphWrapper}>
//         <Svg height="300" width="300" viewBox="0 0 180 180">
//           <G rotation={-90} originX="90" originY="90">
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#f2f2f2"
//               fill="transparent"
//               strokeWidth="15"
//               strokeDasharray={circleCircumference + 5}
//               strokeDashoffset={firstDashOffset} //
//               // strokeLinecap="round"
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#F1FADA"
//               fill="transparent"
//               strokeWidth="15"
//               strokeDasharray={circleCircumference - 5}
//               strokeDashoffset={firstDashOffset} //
//               // strokeLinecap="round"
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#f2f2f2"
//               fill="transparent"
//               strokeWidth="20"
//               strokeDasharray={circleCircumference + 5}
//               strokeDashoffset={secondDashOffset} //
//               // strokeLinecap="round"
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#9AD0C2"
//               fill="transparent"
//               strokeWidth="20"
//               strokeDasharray={circleCircumference}
//               strokeDashoffset={secondDashOffset}
//               // strokeLinecap="round"
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#f2f2f2"
//               fill="transparent"
//               strokeWidth="25"
//               strokeDasharray={circleCircumference + 5}
//               strokeDashoffset={thirdValOffset} //
//               // strokeLinecap="round"
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#2D9596"
//               fill="transparent"
//               strokeWidth="25"
//               strokeDasharray={circleCircumference}
//               strokeDashoffset={thirdValOffset}
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#f2f2f2"
//               fill="transparent"
//               strokeWidth="35"
//               strokeDasharray={circleCircumference + 5}
//               strokeDashoffset={fourthValOffset} //
//               // strokeLinecap="round"
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#BBC3A4"
//               fill="transparent"
//               strokeWidth="35"
//               strokeDasharray={circleCircumference}
//               strokeDashoffset={fourthValOffset}
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#f2f2f2"
//               fill="transparent"
//               strokeWidth="40"
//               strokeDasharray={circleCircumference + 5}
//               strokeDashoffset={fifthValOffset} //
//               // strokeLinecap="round"
//             />
//             <Circle
//               cx="50%"
//               cy="50%"
//               r={radius}
//               stroke="#265073"
//               fill="transparent"
//               strokeWidth="40"
//               strokeDasharray={circleCircumference}
//               strokeDashoffset={fifthValOffset}
//             />
//           </G>
//         </Svg>
//         <Text style={styles.text}></Text>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   graphWrapper: {
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   text: {
//     position: "absolute",
//     textAlign: "center",
//     fontWeight: "600",
//     fontSize: 18,
//     color: "#394867",
//   },
// });
