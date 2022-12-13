import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { HeaderSliderComponent } from './home/header-slider/header-slider.component';
import { RegisterComponent } from './home/register-section/register-section.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { RegisterMainComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule} from'@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ErrorStateMatcher } from '@angular/material/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { logincomponent } from './authentication/login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RegisterDriverComponent } from './register/register-driver/register-driver.component';
import { RegisterUserComponent } from './register/register-user/register-user.component';
import { LoginDriverComponent } from './login/login-driver/login-driver.component';
import { LoginUserComponent } from './login/login-user';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { DriverProfileComponent } from './profile/driver-profile/driver-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { DriverPricingComponent } from './profile/driver-profile/driver-pricing/driver-pricing.component';
import { PricingUserComponent } from './profile/user-profile/pricing-user/pricing-user.component';
import { DriverRideComponent } from './profile/driver-profile/driver-ride/driver-ride.component';
import { LoginAdminComponent } from './login/login-admin/login-admin/login-admin.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeaderSliderComponent,
    RegisterComponent,
    RegisterMainComponent,
    LoginComponent,
    HomeComponent,
    logincomponent,
    BookingsComponent,
    RegisterDriverComponent,
    LoginDriverComponent,
    LoginUserComponent,
    RegisterUserComponent,
    RegisterDriverComponent,
    UserProfileComponent,
    DriverProfileComponent,
    ProfileComponent,
    DriverPricingComponent,
    PricingUserComponent,
    DriverRideComponent,
    LoginAdminComponent,
    AdminProfileComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
    MatSliderModule,
    MatExpansionModule
  ],
  providers: [ UserService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
