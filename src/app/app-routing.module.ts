import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RouteGuardserviceService } from './service/route-guardservice.service';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { SubjectPageComponent } from './subject/subject-page/subject-page.component';
import { SyllabusPageComponent } from './syllabus/syllabus-page/syllabus-page.component';
const routes: Routes = [{path:'',component:ProductlistComponent},
{path:'product',component:ProductlistComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'forget',component:ForgetComponent},
{path: 'subject', component: SubjectPageComponent },
{path: 'syllabus', component: SyllabusPageComponent },
{path: 'menu', component: MenuComponent,canActivate:[RouteGuardserviceService ]},
{ path: 'welcome/:usernane', component: WelcomeComponent,canActivate:[RouteGuardserviceService]},
{path: 'logout',component: LogoutComponent,canActivate:[RouteGuardserviceService ]},
{path: '**', component: ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
