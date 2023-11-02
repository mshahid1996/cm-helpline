import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.css']
   })
   export class UserRegistrationComponent implements OnInit {
  regform!: FormGroup;
  reg: User = new User();
  regformlist: any;
  diptList: any;

  constructor(private formBuilder: FormBuilder, private ds: UserService,private route:Router) {}

  ngOnInit(): void {
    this.getAllUser();
    this.regform = this.formBuilder.group({
    
      Name: [''],

      Address: [''],

      Number: [''],

      Adhar:[''],
      
      Email: [''],
      
      Password: [''],
      
      Comfirm: [''],
      
      Gender: [''],
      
    });
  }

  getAllUser() {
    this.ds.getAllUser().subscribe(
      (res) => {
        this.regformlist = res;
    
        console.log(res);
      },
      (err) => {
        console.log('error while getinh data');
      }
    );
  }

  Register() {
    console.log('fucntio call');

    debugger;

    console.log(this.regform);

    this.reg.Name = this.regform.value.Name;

    this.reg.Address = this.regform.value.Address;

    this.reg.Number = this.regform.value.Number;

    this.reg.Adhar = this.regform.value.Adhar;

    this.reg.Email = this.regform.value.Email;

    this.reg.Password = this.regform.value.Password;

    this.reg.Comfirm = this.regform.value.Comfirm;

    this.reg.Gender = this.regform.value.Gender;

    this.ds.addUser(this.reg).subscribe(
      (res) => {
        console.log(res);
        Swal.fire('Good job!','You have been Succesfully Registered')
        this.route.navigate(['/userdashboard'])
        this.resetForm();
      },
      (err) => {
        console.log(err);
      }  );
  }
  resetForm(){
    this.regform.value['Name'].setValue(null);
    this.regform.value['Address'].setValue(null);
    this.regform.value['Number'].setValue(null);
    this.regform.value['Adhar'].setValue(null);
    this.regform.value['Email'].setValue(null);
    this.regform.value['Gender'].setValue(null);
  }
  
  }