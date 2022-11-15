import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ''
  phno = ""
  adress = ""
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    phno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    adress: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
