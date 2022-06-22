import { Component, Input, OnInit, OnChanges, SimpleChanges, VERSION, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
// import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../Models/Products ';
import { TypeProduct } from '../Models/TypeProduct '
import { TypesService } from '../types.service';
import { SuppilerService } from '../suppiler.service';
import { Suppiler } from '../Models/Suppiler ';
import { HttpClient } from '@angular/common/http';
import { Images } from '../Models/image.module ';

@Component({
  selector: 'app-enter-products',
  templateUrl: './enter-products.component.html',
  styleUrls: ['./enter-products.component.css']
})

export class EnterProductsComponent implements OnInit, OnChanges {

  myProduct: FormGroup = new FormGroup({});
  myTypse: FormGroup = new FormGroup({});
  mySuppiler: FormGroup = new FormGroup({});
  ArrType: TypeProduct[] = [];
  ArrSupplier: Suppiler[] = [];
  myimage: Images = {};
  @Input()
  SelctProduct: Products = new Products(0);
  fileToUpload: File | any = null;
  ngOnInit(): void {
    //this.SelctProduct
    this.myimage = {};
    console.log(this.SelctProduct)
    this.changeView();
    this.mySuppiler = new FormGroup({
      "Id": new FormControl("", Validators.required),
      "NameS": new FormControl("", Validators.required)
    });
    this.myTypse = new FormGroup({
      "Id": new FormControl("", Validators.required),
      "NameT": new FormControl("", Validators.required)
    })
  }


  //  imageUrl:string="/assets/חדרי שינה (3).jpg";


  handleFileInput(file: FileList) {
    console.log(file)
    this.fileToUpload = file.item(0);
  }

  OnSubmit(Caption: any) {
   // console.log(Image)
    this.product.postFile(Caption.value, this.fileToUpload).subscribe(
      data => {
        this.myimage = data;
        console.log('done', data);
        Caption.value = null;
       // Image.value = null;
        //  this.imageUrl="/assets/חדרי שינה (3).jpg";

      }

    );
  }

  changeView() {
    this.myProduct = new FormGroup({
      "Id": new FormControl(this.SelctProduct.Id, Validators.required),
      "NameProdact": new FormControl(this.SelctProduct.NameProdact, Validators.required),
      "TypeProductId": new FormControl(this.SelctProduct.TypeProductId, Validators.required),
      "SupplierId": new FormControl(this.SelctProduct.SupplierId, Validators.required),
      "Length": new FormControl(this.SelctProduct.Length, Validators.required),
      "Width": new FormControl(this.SelctProduct.Width, Validators.required),
      "height": new FormControl(this.SelctProduct.height, Validators.required),
      "Weight": new FormControl(this.SelctProduct.Weight, Validators.required),
      "DescriptionProduct": new FormControl(this.SelctProduct.DescriptionProduct, Validators.required),
      "Yearsofwarranty": new FormControl(this.SelctProduct.Yearsofwarranty, Validators.required),
      "Price": new FormControl(this.SelctProduct.Price, Validators.required),
      "salePrice": new FormControl(this.SelctProduct.salePrice, Validators.required),
      "OperatingDate": new FormControl(this.SelctProduct.OperatingDate, Validators.required),
      // "PhotoId":new FormControl(this.SelctProduct.PhotoId,Validators.required),
    })
  }

  constructor(private product: ProductService, private types: TypesService, private suppiler: SuppilerService, private http: HttpClient) {
    this.types.AllTypes().subscribe(s => { this.ArrType = s, console.log(s) }, e => { console.log(e) })
    this.suppiler.AllSupiilers().subscribe(s => { this.ArrSupplier = s, console.log(s) }, e => { console.log(e) })

  }

  enterTypes() {
    this.types.EnterTypes(this.myTypse.value).subscribe(
      s => { console.log(s) },
      e => { console.log(e) }
    )
  }
  enterSuppilers() {
    this.suppiler.EnterSuppiler(this.mySuppiler.value).subscribe(
      s => { console.log(s) },
      e => { console.log(e) }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.changeView();

  }


  enter() {
    const product = { ...this.myProduct.value };
    if (this.myimage.Id != null) product['ImageId'] = this.myimage.Id;
    if (this.SelctProduct.Id == -1) {


      this.product.EnterProuduct(product).subscribe(
        s => { console.log(s) },
        e => { console.log(e) }
      )
    } else {
      if (this.SelctProduct.Id > 0) {
        this.product.updatePruduct(product).subscribe(s => { console.log(s, "updated") }, e => { console.log(e) })

      }
    }
  }

}
