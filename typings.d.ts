declare module "*.json" {
    const value: any;
    export default value;
}
/**
* Represents a single property
*/
interface IProperty {
  id: string
  price: string
  mainImage: URL
  agency: IAgency
}

/**
* Represents a single agency
*/
interface IAgency {
  logo: URL
  brandingColors: IBrandingColors
}

/**
* Represents the branding colors
*/
interface IBrandingColors {
  primary: string
  secondary?: string
}
