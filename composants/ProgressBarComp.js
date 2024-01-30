import * as React from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";

const ProgressBarComp = ({ count }) => (
  <ProgressBar progress={count} color={MD3Colors.error50} />
);

export default ProgressBarComp;
