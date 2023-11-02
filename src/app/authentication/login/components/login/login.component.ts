import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  loading = false;  // New property to track loading state

  constructor(
    private loginService: LoginService,
    private router: Router,
    private logger: NGXLogger,
    private snackBar: MatSnackBar
  ) { }

  onLoginSubmit() {
    this.logger.debug('Login form submitted');
    if (this.username.valid && this.password.valid) {
      const usernameValue = this.username.value || ''; // Use empty string if null
      const passwordValue = this.password.value || ''; // Use empty string if null
      this.loading = true;  // Set loading to true when login starts
      this.loginService.login(usernameValue, passwordValue).subscribe({
        next: (data) => {
          this.loading = false;  // Set loading to false on success
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.loading = false;  // Set loading to false on error
          this.logger.error('Login failed', error);
          this.snackBar.open('Login failed: ' + (error.message || 'Unknown error'), 'Close', {
            duration: 5000,  // 5 seconds
          });
        }
      });
    } else {
      this.snackBar.open('Please fill in all required fields.', 'Close', {
        duration: 3000,  // 3 seconds
      });
    }
  }


}
