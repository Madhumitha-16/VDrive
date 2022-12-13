import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterMainComponent} from './register/register.component'
import { BookingsComponent } from './bookings/bookings.component';
import { LoginUserComponent } from './login/login-user';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { RegisterDriverComponent } from './register/register-driver/register-driver.component';
import { RegisterUserComponent } from './register/register-user';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterMainComponent },
  { path: "*", component: AppComponent },
  { path: "bookings", component: BookingsComponent },
  {path: "login-user", component:LoginUserComponent},
  {path: "login-driver", component:LoginDriverComponent},
  {path: "register-user", component:RegisterUserComponent},
  {path: "register-driver", component:RegisterDriverComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

