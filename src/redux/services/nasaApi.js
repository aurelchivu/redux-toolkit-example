import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nasa.gov/planetary',
  }),
  endpoints: (builder) => ({
    getPictures: builder.query({
      query: (count = 10) =>
        `/apod?api_key=${import.meta.env.VITE_APP_NASA_API_KEY}&count=${count}`,
    }),
  }),
});

export const { useGetPicturesQuery } = nasaApi;
