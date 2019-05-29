export interface IShowDetails {
    name: string
    genres: string
    image: object
    rating: number
    language: string
    summary: string
    showId: number
    cast: {
        name: string
        image: object
    }[]
 
}
