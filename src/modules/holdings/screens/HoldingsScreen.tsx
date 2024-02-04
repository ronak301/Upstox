import { View, Text } from "react-native";
import React from "react";
import StockList from "../components/StockList";
import { useApi } from "../../../api/useApi";
import { fetchHoldings } from "../../../api/holdingsApi";
import PortfolioSummary from "../components/PortfolioSummary";

const HoldingsScreen = () => {
  const { request: fetchHoldingsApi, data, loading } = useApi(fetchHoldings);

  React.useEffect(() => {
    fetchHoldingsApi();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  return (
    <View style={{ flex: 1 }}>
      <StockList holdingsData={data?.userHolding} />
      <PortfolioSummary holdingsData={data?.userHolding} />
    </View>
  );
};

export default HoldingsScreen;
