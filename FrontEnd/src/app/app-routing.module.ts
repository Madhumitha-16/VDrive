import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterMainComponent} from './register/register.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginUserComponent } from './login/login-user';
import { LoginAdminComponent } from './login/login-admin/login-admin/login-admin.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { RegisterDriverComponent } from './register/register-driver/register-driver.component';
import { RegisterUserComponent } from './register/register-user';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { DriverProfileComponent } from './profile/driver-profile/driver-profile.component';
import { DriverPricingComponent } from './profile/driver-profile/driver-pricing/driver-pricing.component';
import { PricingUserComponent } from './profile/user-profile/pricing-user/pricing-user.component';
import { DriverRideComponent } from './profile/driver-profile/driver-ride/driver-ride.component';

const routes: Routes = [
  { path: "", redirectTo: "/home-user", pathMatch: "full" },
  { path: "home-user", component: HomeComponent },
  { path: "home-driver", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterMainComponent },
  { path: "*", component: AppComponent },
  { path: "bookings", component: BookingsComponent },
  {path: "login-admin", component:LoginAdminComponent},
  {path: "login-user", component:LoginUserComponent},
  {path: "login-driver", component:LoginDriverComponent},
  {path: "register-user", component:RegisterUserComponent},
  {path: "register-driver", component:RegisterDriverComponent},
  {path: "profile",component:ProfileComponent},
  {path: "admin-profile",component: AdminProfileComponent},
  {path: "user-profile",component: UserProfileComponent},
  {path: "driver-profile",component: DriverProfileComponent},
  {path: "driver-pricing",component: DriverPricingComponent},
  {path: "user-pricing",component: PricingUserComponent},
  {path: "driver-rides",component: DriverRideComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

