// created by :
//   Momtez HADDAD,
//   haddadmomtez@gmail.com
//   https://www.linkedin.com/in/momtezhaddad/

import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,  
  providers: [],
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatRadioModule, MatDatepickerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loginForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required, ]),
    secondname: new FormControl('', [Validators.required,]),
    dateBirth: new FormControl('', [Validators.required,]),
    gender: new FormControl('', [Validators.required]),
    Address: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email,]),
    password: new FormControl('', Validators.required),
  });

  submit() {
    if (this.loginForm.invalid) {
      alert('please complete the required fields');
      return;
    }

    alert('Good');
  }
}
