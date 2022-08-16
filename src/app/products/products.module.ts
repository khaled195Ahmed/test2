import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDitelsComponent } from './components/product-ditels/product-ditels.component';
import { SpinerComponent } from '../shared/components/spiner/spiner.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDitelsComponent,

  ],
imports: [
  CommonModule,
  SharedModule,

]
})
export class ProductsModule { }
