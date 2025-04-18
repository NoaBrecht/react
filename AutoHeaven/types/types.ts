export interface Brand {
  name: string;
  id: number;
  country: string;
  founded: number;
  city: City;
  website: string;
  logo: string;
}

export interface City {
  name: string;
  latitude: number;
  longitude: number;
}

export interface Model {
  id: number;
  name: string;
  brand_id: number;
  type: string;
  year: number;
  fuel_type: FuelType;
  top_speed_kmh: number;
  acceleration_0_to_100_kmh: number;
  horsepower: number;
  transmission: Transmission;
  seating_capacity: number;
}

export enum FuelType {
  Diesel = "Diesel",
  Petrol = "Petrol",
  Hybrid = "Hybrid",
  Electric = "Electric",
  Hydrogen = "Hydrogen",
  CNG = "CNG",
  LPG = "LPG",
  Other = "Other",
}

export enum Transmission {
  Automatic = "Automatic",
  Manual = "Manual",
  CVT = "CVT",
  DCT = "DCT",
  Sequential = "Sequential",
  SemiAutomatic = "SemiAutomatic",
  ElectricDrive = "ElectricDrive"
}
