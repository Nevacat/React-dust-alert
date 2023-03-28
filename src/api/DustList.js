import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'qs';

const getParameters = (sidoName) => ({
  serviceKey: import.meta.env.VITE_SERVER_API_KEY,
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  sidoName,
  ver: '1.0',
});

export const dustApi = createApi({
  reducerPath: 'dustApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/B552584/ArpltnInforInqireSvc',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (sidoName) => `/getCtprvnRltmMesureDnsty?${qs.stringify(getParameters(sidoName))}`,
    }),
  }),
});

export const { useGetPostsQuery } = dustApi;
