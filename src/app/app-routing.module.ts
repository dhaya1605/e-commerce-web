import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component'
import {ProductDetailsComponent} from 'src/app/product-details/product-details.component'
import {SinglepageComponent} from 'src/app/singlepage/singlepage.component'
import {PaymentComponent} from 'src/app/payment/payment.component'


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'productDetails', component: ProductDetailsComponent},
  {path:'singlepage',component:SinglepageComponent},
  {path:'payment',component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
