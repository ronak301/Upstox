import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Holding } from "../../../types/types";

type Props = {
  item: Holding;
};

const StockListItem = ({ item }: Props) => {
  const profitLoss = (item.ltp - item.avgPrice) * item.quantity;
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: "white",
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.symbol}</Text>
        <Text style={{ fontSize: 14, color: "#212121" }}>
          LTP:{" "}
          <Text
            style={{ fontSize: 14, fontWeight: "500" }}>{`₹${item.ltp}`}</Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 8,
        }}>
        <Text style={{ fontSize: 14, color: "#212121" }}>{item.quantity}</Text>
        <Text style={{ fontSize: 14, color: "#212121" }}>
          P/L:{" "}
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
            }}>{`₹${profitLoss?.toFixed(2)}`}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StockListItem;
