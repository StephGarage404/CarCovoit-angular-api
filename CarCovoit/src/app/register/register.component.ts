import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../interface/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.registerForm.valid) {
      const user: any = {
        
        firstname: this.registerForm.value.firstname ?? '',
        lastname: this.registerForm.value.lastname ?? '',
        email: this.registerForm.value.email ?? '',
        password: this.registerForm.value.password ?? ''
      };

      this.authService.register(user).subscribe(response => {
        // Handle response, e.g., navigate to a different page or show a success message
      });
    }
  }
}
