export type TEvent = {
  title?: string;
  subtitle?: string;
  venueName: string;
  ceremonyTime: string;
  banquetTime: string;
  address: string;
  mapEmbedUrl: string; // For the visual map
  mapLocationLink: string; // For the "Open in Maps" button
  transportationTitle?: string;
  transportationInfo?: string;
};
