import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "62d3fc0303mshfe15072b46da5ccp195b29jsnb3607bd8e876",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => ({
        url: "/coins",
        headers: cryptoApiHeaders,
      }),
    }),
    GetCryptoDetails: builder.query({
      query: (coinId) => ({
        url: `/coin/${coinId}`,
        headers: cryptoApiHeaders,
      }),
    }),
    GetCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => ({
        url: `coin/${coinId}/history?timeperiod=${timeperiod}`,
        headers: cryptoApiHeaders,
      }),
    }),
    GetExchanges: builder.query({
      query: () => ({
        url: `/exchanges`,
        headers: cryptoApiHeaders,
      }),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
