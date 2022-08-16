import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent implements OnInit {
products:any[] = [];
 categories:any[] = [];

constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProductsService();
    this.getCategoreisService()
  }
  getProductsService(){
    this.service.getAllProdutct().subscribe((res:any)=>{
      this.products=res;
      console.log(res)

    } ,
    err=>{alert("errorr")}

    )
  }
  getCategoreisService(){
    this.service.getAllCategories().subscribe((res:any)=>{
      this.categories = res;

          console.log(res)
    } , err=>{alert("errorr")}

    )
  }
falterCategorie(event:any){
  let value=event.target.value

  if(value=="all"){
    this.getProductsService()
  }
  else{
    this.getCategorieFromService(value)
  }

}
getCategorieFromService(cat:any){
  this.service.getProductsCategories(cat).subscribe((res:any)=>{
      this.products=res
  })
}
}
