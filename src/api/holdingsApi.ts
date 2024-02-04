import client from "./baseApiClinet";

export const fetchHoldings = async () => {
  return await client.get("v3/bde7230e-bc91-43bc-901d-c79d008bddc8");
};
