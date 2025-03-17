export interface NominatimData {
  address: NominatimAddress;
}

export interface NominatimAddress {
  country?: string;
  county?: string;
  city?: string;
  town?: string;
  village?: string;
  hamlet?: string;
  locality?: string;
  postcode?: string;
  road?: string;
  pedestrian?: string;
  footway?: string;
  path?: string;
  square?: string;
  street?: string;
  house_number?: string;
}

export type Address = {
  country?: string;
  county?: string;
  city?: string;
  postalCode?: string;
  street?: string;
}

export type Coordinates = {
  latitude: number;
  longitude: number;
};
