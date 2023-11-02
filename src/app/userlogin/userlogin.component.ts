import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { User } from '../model/user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  regDetail!: FormGroup;

  log: User= new User();

  regformlist: any;

  getAllUser: any;
  constructor(private formBuilder : FormBuilder, private empService : UserService,private route:Router) { }

  ngOnInit(): void {
    this.regDetail = this.formBuilder.group({
      Email: [''],
      Password: [''],
      });
      }
      UserLogin(){
      debugger;
      console.log(this.regDetail);
      this.log.Email=this.regDetail.value.Email;
      this.log.Password=this.regDetail.value.Password;
      //this.lg. checkuser(this.log).subscribe(res=>{
      this.empService.addUserLogin(this.log).subscribe(res=>{
      console.log(res);
      if(res!=null){
      console.log("valid");
      //alert("Sucess");
      Swal.fire('Good job!','You have been Succesfully login')
      this.route.navigate(['/userdashboard'])
   }
    else{
    Swal.fire('Not Allowed','Please Register Yourself First ,Either check Email and Password',)
  //alert("Fail");
    this.route.navigate(['/userllogin'])
    }
    },err=>{
    console.log(err);
    });
  }

}
