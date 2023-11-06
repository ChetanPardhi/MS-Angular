import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ProductItemsComponent } from './home/product-items/product-items.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { appReducer } from './store/app.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './home/state/product.effects';
import { ProductPopUpComponent } from './home/product-pop-up/product-pop-up.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemsComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    ProductPopUpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ProductEffects]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
