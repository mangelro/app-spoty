


export interface NewRelease {
   
    name:string;
    images: Image[];
    artists: Artist[];
    release_date:Date;
    
}


interface Image{
    url:string;
}

interface Artist{
    name:string;
    id:string;
}