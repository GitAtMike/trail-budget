export interface Trip{
    id: number
    name: string
    destination: string
    distance_miles: number
    gas_cost: number
    food_cost: number
    permit_cost: number
    gear_cost: number
    notes: string
    created_at: string
}

export interface TripFormData{
    name: string
    destination: string
    distance_miles: number
    gas_cost: number
    food_cost: number
    permit_cost: number
    gear_cost: number
    notes: string
}