import { View, FlatList, RefreshControl } from "react-native";
import React from "react";
import { Holdings } from "../../../types/types";
import StockListItem from "./StockListItem";

type Props = {
  holdingsData: Holdings;
  refetch: () => void;
};

const StockList = ({ holdingsData, refetch }: Props) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  const renderItem = ({ item }) => <StockListItem item={item} />;

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
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
