import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../interface/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  
  user:User | null = null

  registerform = new FormGroup({
    firstname:new FormControl(''), 
    lastname:new FormControl(''), 
    email:new FormControl(''), 
    password:new FormControl(''), 
  })

  constructor() {
  }

  onSubmit() {
   console.log(this.registerform);
  }
}

