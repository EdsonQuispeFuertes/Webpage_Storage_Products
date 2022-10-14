import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  public submitted = false;
  constructor(
    public fb: FormBuilder,
    public api: HttpClient,
    private Service: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.Service.post('/login', this.loginForm.value )
      .then(() => {
          this.router.navigate(['/product']);
      })
      .catch((error) => {
        console.log(error)
      });
  }
}
