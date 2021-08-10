import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  alert=false;//for Form hiding
  registerForm!: FormGroup;
  submitted = false;
  formData: any
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(new Date().setDate(new Date().getDate() - 1))
  signUpDataArray:any=[]
  intervalSubscripton$!: Subscription


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {

        fullName: new FormControl("", Validators.required),
        dob: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),

        userName: new FormControl('', [Validators.required, Validators.email]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ])
        ,
        confirmPassword: new FormControl("", Validators.required)
      },
    )
   
    
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    //Storing data into Local Storage
    localStorage.setItem(this.registerForm.value.userName,JSON.stringify(this.registerForm.value))
    if (this.registerForm.invalid) {
      return;
    }
    this.alert=true;
    this.formData = this.registerForm.value;
    const customObs = Observable.create(
      (obs:any) => {
        let count = 0;
        setInterval(
          () => {
            if(count==1)
            {
              obs.complete();
              
            }
            obs.next(count)
            count++
          }, 4000
        )
      }
    );
    customObs.subscribe( ()=>
      {
        this.router.navigate(['/login']);
      })
    
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
