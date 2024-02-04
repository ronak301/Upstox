import { View, Text } from "react-native";
import React from "react";
import { isEmpty } from "lodash";

type Props = {
  ifPresent: any;
  children: any;
};

const Check = ({ ifPresent, children }: Props) => {
  if (ifPresent || !isEmpty(ifPresent)) return children;
  return <View />;
};

export default Check;
