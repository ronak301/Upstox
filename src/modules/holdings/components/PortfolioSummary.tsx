import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import React from "react";
import { isEmpty } from "lodash";
import { Holdings } from "../../../types/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import Check from "../../../components/Check";
import { getPortfolio } from "../../../utils/utils";
import { useTheme } from "../../../theme";

type Props = {
  holdingsData: Holdings;
};

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Item = ({ label, value }: { label: string; value: number }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 6,
      }}>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{label}</Text>
      <Text
        style={{
          fontSize: 16,
        }}>{`₹${value?.toFixed(2)}`}</Text>
    </View>
  );
};

const PortfolioSummary = ({ holdingsData }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const iconName = isExpanded ? "chevron-up" : "chevron-down";

  const { colors } = useTheme();

  if (isEmpty(holdingsData)) {
    return null;
  }

  const { totalInvestment, totalProfitLoss, todaysProfitLoss, currentValue } =
    getPortfolio(holdingsData);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        paddingTop: 12,
        paddingBottom: 48,
        paddingHorizontal: 16,
        borderRadius: 24,
        shadowColor: "##212121",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}
      onPress={() => {
        LayoutAnimation.easeInEaseOut();
        setIsExpanded(!isExpanded);
      }}>
      <View style={{ alignSelf: "center" }}>
        <Ionicons name={iconName} size={22} color={colors.primary} />
      </View>

      <Check ifPresent={isExpanded}>
        <Item label="Current Value:" value={currentValue} />
        <Item label="Total Investment:" value={totalInvestment} />
        <Item label="Today's Profit & Loss:" value={todaysProfitLoss} />
        <View style={{ width: "100%", height: 16 }} />
      </Check>
      <Item label="Profit & Loss:" value={totalProfitLoss} />
    </TouchableOpacity>
  );
};

export default PortfolioSummary;
