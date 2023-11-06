import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userLoggedInCredentials } from 'src/app/auth/state/user-login.actions';
import { SelectLoginCredentials, } from 'src/app/auth/state/user-login.selector';
import { AppState } from 'src/app/store/app.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName !: string  ;

  public userLoggedInState$ = this.store.select(SelectLoginCredentials)

  isActive = false;

  constructor(private store : Store<AppState>){}
  ngOnInit(): void {
    this.userLoggedInState$.subscribe((userLoggedInCredentials) => {
      this.userName != userLoggedInCredentials.userName ;
      this.isActive = this.isActive ? true : false;
    })
  }

  handleUserLogout():void{
    this.isActive = false
  }

}
