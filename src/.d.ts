export interface RESTCountries {
  name:         Name;
  capital?:     string[];
  flags:        Flags;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

