import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.module';
import { Store } from '@ngrx/store';
import { LoginCredentialModel } from '../models/login.model';
import { SelectLoginCredentials } from '../state/user-login.selector';
import { userLoggedInCredentials } from '../state/user-login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginCredentialsForm = this.formBuilder.nonNullable.group({
    userEmail: ['', [Validators.email, Validators.required]],
    userPassword: ['', Validators.required],
    userName: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  public loginCredentials!: LoginCredentialModel;
  public formSubmitted: boolean = false;
  public userLoggedInState$ = this.store.select(SelectLoginCredentials);

  ngOnInit(): void {
    this.userLoggedInState$.subscribe((res) => {
      if (res.isActive === true) {
        this.router.navigate(['/']);
      }
    });
  }

  handleUserLoginSubmit(): void {
    if (!this.loginCredentialsForm.invalid) {
      console.log('Reached Login');
      this.loginCredentials = this.loginCredentialsForm.value;
      this.loginCredentials.isActive = true;
      this.store.dispatch(
        userLoggedInCredentials({ loginCredentials: this.loginCredentials })
      );
      this.router.navigate(['/']);
    } else {
      this.formSubmitted = true;
    }
  }
}
