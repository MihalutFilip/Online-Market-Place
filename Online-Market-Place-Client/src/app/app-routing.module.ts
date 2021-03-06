import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: `login`, component: LoginComponent, canActivate: [LoginGuard] },
  { path: `register`, component: RegisterComponent, canActivate: [LoginGuard] },
  { path: `users`, component: UsersComponent, canActivate: [AuthGuard] },
  { path: `product-type`, component: ProductTypeComponent, canActivate: [AuthGuard] },
  { path: `products`, component: ProductComponent, canActivate: [AuthGuard] },
  { path: `change-password`, component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: ``, component: HomeComponent, canActivate: [HomeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
