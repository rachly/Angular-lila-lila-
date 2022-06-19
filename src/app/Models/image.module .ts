// import { Byte } from "@angular/compiler/src/util";

export class Image{
  constructor(public url?:string,public row?:string,public col?:string){

  }

}

export class Images{
  constructor(public Id ?:number,
    public  NameImage?: string,
    public  ImageCaption?:string,
    public  Filevalue?:any ){
      // Byte[]

  }

}