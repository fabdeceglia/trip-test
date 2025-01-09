export enum TripFilterEnum {
    TITLE = 'title', 
    PRICE = 'price',
    RATING = 'rating',
    CREATIONDATE = 'creationDate',
}

export enum SortingFilterEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface TripSearchFilter {
    field: TripFilterEnum | null,
    sort: SortingFilterEnum | null
}