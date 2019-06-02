export interface ISingleShowDetailsData {
    name: string
    language: string
    genres: string[]
    rating:{
        average:number
    }
    image: {
        medium:string
    }
    summary:string
    id: number    
}
