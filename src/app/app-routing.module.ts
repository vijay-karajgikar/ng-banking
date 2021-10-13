import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ApproveAccountComponent } from './approve-account/approve-account.component';
import { TransactComponent } from './transact/transact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthGuard } from './common/auth-guard';
import { AuthAdminGuard } from './common/auth-admin-guard';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'createAccount', component: CreateAccountComponent, canActivate: [AuthGuard] },
  { path: 'transact', component: TransactComponent, canActivate: [AuthGuard] },
  { path: 'approve', component: ApproveAccountComponent, canActivate: [AuthAdminGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
