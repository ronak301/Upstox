import { View, FlatList } from "react-native";
import React from "react";
import { Holdings } from "../../../types/types";
import StockListItem from "./StockListItem";

type Props = {
  holdingsData: Holdings;
};

const StockList = ({ holdingsData }: Props) => {
  const renderItem = ({ item }) => <StockListItem item={item} />;

  return (
    <FlatList
      data={holdingsData}
      renderItem={renderItem}
      keyExtractor={(item) => item?.symbol}
      ItemSeparatorComponent={() => (
        <View style={{ width: "100%", height: 1 }} />
      )}
    />
  );
};

export default StockList;
