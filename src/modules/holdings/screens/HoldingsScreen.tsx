import { View, Text } from "react-native";
import React from "react";
import StockList from "../components/StockList";
import { useApi } from "../../../api/useApi";
import { fetchHoldings } from "../../../api/holdingsApi";
import PortfolioSummary from "../components/PortfolioSummary";
import LoadingComponent from "../../../components/LoadingComponent";
import ErrorComponent from "../../../components/ErrorComponent";
import Animated, { FadeInDown } from "react-native-reanimated";

const HoldingsScreen = () => {
  const {
    request: fetchHoldingsApi,
    data,
    loading,
    error,
  } = useApi(fetchHoldings);

  React.useEffect(() => {
    fetchHoldingsApi();
  }, []);

  if (loading) return <LoadingComponent />;

  if (error) return <ErrorComponent />;

  return (
    <Animated.View style={{ flex: 1 }} entering={FadeInDown.duration(500)}>
      <View style={{ flex: 1 }}>
        <StockList holdingsData={data?.userHolding} />
        <PortfolioSummary holdingsData={data?.userHolding} />
      </View>
    </Animated.View>
  );
};

export default HoldingsScreen;
