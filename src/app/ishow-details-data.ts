export interface IShowDetailsData {
    show: {
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
    },
    person: {
        name: string
        image: {
            medium:string
        }        
    },
   
}
