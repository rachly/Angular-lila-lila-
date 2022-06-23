 //import { Byte } from "@angular/compiler/src/util";

export class Products{
    constructor(public  Id:number,
        public  NameProdact?:string,
        public TypeProductId?:number,
        public SupplierId?:number,
        public Length?:number,
        public Width?:number,
        public height?:number,
        public Weight?:number,
        public DescriptionProduct?:string,
        public Yearsofwarranty?:number,
        public Price?:number,
        public salePrice?:number,
        public OperatingDate?:Date,
        public Active?:boolean,
        public ImageId?:number,
        public Photo?:any
        // 
        )
        {

    }

}