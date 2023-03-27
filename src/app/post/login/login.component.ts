
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  form!: FormGroup;
    loading = false;
    submitted = false;
    userRes={};
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        // private accountService: AccountService,
        // private alertService: AlertService
       private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
          email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    submit() {
        this.submitted = true;

        // reset alerts on submit
      //  this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        console.log("this.form.value",this.form.value);
        this.authenticationService.login(this.form.value).subscribe((res:any) => {
          this.userRes=res;
          console.log("res", res.token);
          console.log('user login successfully!');
          localStorage.setItem('token', res.token);
          this.router.navigateByUrl('post/index');
     })

    }  
}
