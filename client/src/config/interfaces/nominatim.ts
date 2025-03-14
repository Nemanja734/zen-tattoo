export interface NominatimData {
    address: Address
}

interface Address {
    country?: string
    county?: string
    city?: string
    town?: string
    village?: string
    hamlet?: string
    locality?: string
    postcode?: string
    road?: string
    pedestrian?: string
    footway?: string
    path?: string 
    square?: string
    house_number?: string
}
