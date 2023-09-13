export interface RESTCountries {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  EGP?: Aed;
  ILS?: Aed;
  JOD?: Aed;
  KWD?: Aed;
  GNF?: Aed;
  NZD?: Aed;
  AFN?: Aed;
  USD?: Aed;
  CAD?: Aed;
  PAB?: Aed;
  NAD?: Aed;
  ZAR?: Aed;
  ANG?: Aed;
  BIF?: Aed;
  BGN?: Aed;
  CRC?: Aed;
  AUD?: Aed;
  ETB?: Aed;
  SBD?: Aed;
  TZS?: Aed;
  PGK?: Aed;
  EUR?: Aed;
  XCD?: Aed;
  NOK?: Aed;
  DZD?: Aed;
  HKD?: Aed;
  BWP?: Aed;
  KYD?: Aed;
  IRR?: Aed;
  SZL?: Aed;
  BDT?: Aed;
  XAF?: Aed;
  NGN?: Aed;
  BAM?: BAM;
  GBP?: Aed;
  GGP?: Aed;
  KGS?: Aed;
  CDF?: Aed;
  MOP?: Aed;
  PHP?: Aed;
  GHS?: Aed;
  DJF?: Aed;
  IDR?: Aed;
  XOF?: Aed;
  MWK?: Aed;
  BOB?: Aed;
  DKK?: Aed;
  KZT?: Aed;
  HNL?: Aed;
  NIO?: Aed;
  ZWL?: Aed;
  ARS?: Aed;
  GMD?: Aed;
  SDG?: BAM;
  MMK?: Aed;
  CLP?: Aed;
  RUB?: Aed;
  FJD?: Aed;
  KHR?: Aed;
  VES?: Aed;
  AED?: Aed;
  CHF?: Aed;
  SYP?: Aed;
  KES?: Aed;
  KID?: Aed;
  GYD?: Aed;
  RWF?: Aed;
  CKD?: Aed;
  UYU?: Aed;
  ERN?: Aed;
  MGA?: Aed;
  SRD?: Aed;
  JMD?: Aed;
  TND?: Aed;
  BMD?: Aed;
  SOS?: Aed;
  BHD?: Aed;
  VND?: Aed;
  GIP?: Aed;
  LYD?: Aed;
  KRW?: Aed;
  MXN?: Aed;
  CZK?: Aed;
  WST?: Aed;
  TRY?: Aed;
  ZMW?: Aed;
  AZN?: Aed;
  SHP?: Aed;
  XPF?: Aed;
  IQD?: Aed;
  LKR?: Aed;
  MVR?: Aed;
  SCR?: Aed;
  TJS?: Aed;
  LSL?: Aed;
  MAD?: Aed;
  MRU?: Aed;
  MDL?: Aed;
  PYG?: Aed;
  BBD?: Aed;
  GTQ?: Aed;
  TTD?: Aed;
  JPY?: Aed;
  AMD?: Aed;
  PEN?: Aed;
  TVD?: Aed;
  BYN?: Aed;
  UZS?: Aed;
  PKR?: Aed;
  NPR?: Aed;
  INR?: Aed;
  PLN?: Aed;
  AOA?: Aed;
  BZD?: Aed;
  UGX?: Aed;
  QAR?: Aed;
  SSP?: Aed;
  FKP?: Aed;
  YER?: Aed;
  BRL?: Aed;
  LRD?: Aed;
  CVE?: Aed;
  MZN?: Aed;
  UAH?: Aed;
  LAK?: Aed;
  SEK?: Aed;
  AWG?: Aed;
  OMR?: Aed;
  MUR?: Aed;
  MNT?: Aed;
  HUF?: Aed;
  HTG?: Aed;
  BTN?: Aed;
  LBP?: Aed;
  BND?: Aed;
  SGD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  TMT?: Aed;
  DOP?: Aed;
  IMP?: Aed;
  TOP?: Aed;
  KMF?: Aed;
  SAR?: Aed;
  GEL?: Aed;
  MYR?: Aed;
  RSD?: Aed;
  TWD?: Aed;
  ALL?: Aed;
  KPW?: Aed;
  FOK?: Aed;
  THB?: Aed;
  BSD?: Aed;
  ISK?: Aed;
  COP?: Aed;
  SLL?: Aed;
  VUV?: Aed;
  RON?: Aed;
  CNY?: Aed;
  JEP?: Aed;
  STN?: Aed;
  MKD?: Aed;
}

export interface Aed {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
