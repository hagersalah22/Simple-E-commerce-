import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path:'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
     path:'login',
     component: LoginComponent
  },
  {
    path:'cart',
    component: CartComponent
    },
  {
    path:'**',
    component:NotFoundComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
