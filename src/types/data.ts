/**
* Represents a single property
*/
export interface IProperty {
  id: string
  price: string
  mainImage: URL
  agency: IAgency
}

/**
* Represents a single agency
*/
export interface IAgency {
  logo: URL
  brandingColors: IBrandingColors
}

/**
* Represents the branding colors
*/
export interface IBrandingColors {
  primary: string
  secondary?: string
}
