import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { LoginComponent } from "./auth/login/login.component";
import { NgModule } from '@angular/core';


const routes : Routes = [
    {
        path : '',
        component : HomePageComponent
    },
    {
        path : 'login',
        component : LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}