export const getPortfolio = (holdingsData) => {
  const totalProfitLoss = holdingsData.reduce((acc, holding) => {
    return acc + (holding.ltp - holding.avgPrice) * holding.quantity;
  }, 0);

  const currentValue = holdingsData.reduce((acc, holding) => {
    return acc + holding.ltp * holding.quantity;
  }, 0);

  const totalInvestment = holdingsData.reduce((acc, holding) => {
    return acc + holding.avgPrice * holding.quantity;
  }, 0);

  const todaysProfitLoss = holdingsData.reduce((acc, holding) => {
    return acc + (holding.ltp - holding.close) * holding.quantity;
  }, 0);

  return {
    totalProfitLoss,
    currentValue,
    totalInvestment,
    todaysProfitLoss,
  };
};
