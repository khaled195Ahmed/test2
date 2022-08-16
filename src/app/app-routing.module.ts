import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDitelsComponent } from './products/components/product-ditels/product-ditels.component';

const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"details",component:ProductDitelsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
