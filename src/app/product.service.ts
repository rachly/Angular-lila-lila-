import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './Models/Products ';
// import { Byte } from '@angular/compiler/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Http:HttpClient) { }
  EnterProuduct(p:Products){
    return this.Http.post<Products>("https://localhost:44381/api/Products/SetProduct",p);
  
    }
    AllProdact(type:number){
      return this.Http.get<Products[]>(`https://localhost:44381/api/Products/GetAllProducts?type=${type}`); 
    }
     DeleteProdact(prodactId:number){
      return this.Http.delete<Products>(`https://localhost:44381/api/Products?productId=${prodactId}`);   
      }
     updatePruduct(Pruduct:Products){
       return this.Http.put<Products>("https://localhost:44381/api/Products/UpdateProducts",Pruduct);

     }
    AllOldProdacts(type:number){
      return this.Http.get<Products[]>(`https://localhost:44381/api/Products/GetAllPWhithNotActive?type=${type}`);
    }
    AllPicture(){
      // <Byte[][]>
      return this.Http.get(" https://localhost:44381/api/image");
    }
    
       postFile(caption:string,fileToUpload:File|any){
       console.log(fileToUpload)
        const endpoint='https://localhost:44381/api/Image/uploadImage';
         const fromData:FormData=new FormData();
         fromData.append('Image',fileToUpload);
        //fromData.append('ImageCaption',caption);
         return this.Http.post(endpoint,fromData);
      
       }   

    // getLoction(){
    //   return this.Http.get('http://api.ipapi.com/api/check?access_key')
    // }
    

}

