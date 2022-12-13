import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { HeaderSliderComponent } from './home/header-slider/header-slider.component';
import { ServicesComponent } from './services-section/services-section.component';
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
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeaderSliderComponent,
    ServicesComponent,
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
    RegisterDriverComponent

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
    MatInputModule

  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
