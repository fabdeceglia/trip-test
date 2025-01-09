import { Trip } from "./trip.model"

export interface TripsPage {
    items: Trip[]
    total: number
    page: number
    limit: number
  }