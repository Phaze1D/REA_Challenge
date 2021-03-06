import { Map } from 'immutable'

export interface IProperty {
  id: string
  price: string
  mainImage: string
  agency: IAgency
  disable?: boolean
}

export interface IPropertyMap extends IProperty, Map<string, any>{
  agency: IAgencyMap
}

export interface IAgency {
  logo: string
  brandingColors: IBrandingColors
}

export interface IAgencyMap extends IAgency, Map<string, any> {
  brandingColors: IBrandingColorsMap
}


export interface IBrandingColors {
  primary: string
  secondary?: string
}

export interface IBrandingColorsMap extends IBrandingColors, Map<string, string> {

}
