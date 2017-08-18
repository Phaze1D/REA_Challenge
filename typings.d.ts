declare module "*data.json" {
    export let results: IProperty[]
    export let saved: IProperty[]
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
