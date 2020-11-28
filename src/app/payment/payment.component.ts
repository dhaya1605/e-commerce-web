import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  options: FormGroup;
  colorControl = new FormControl('primary');



  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return '';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private _formBuilder: FormBuilder) {
    this.options = _formBuilder.group({
      color: this.colorControl,
    });
   }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.options = this._formBuilder.group({
      optionsControl: ['', Validators.required]
    });
    
  }

}
