import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Officer } from '../model/officer';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.css']
})
export class OfficerLoginComponent implements OnInit {
 
  regDetail!: FormGroup;

   log: Officer = new Officer();

  regformlist: any;

  getAllUser: any;
  // private fb:FormBuilder,private lg:LoginService, private route:Router
  constructor(private formBuilder : FormBuilder, private empService : UserService,private route:Router) { }

  ngOnInit(): void {
    this.regDetail = this.formBuilder.group({
      Email: [''],
      password: [''],
      });
      }
      GetLogin(){
      debugger;
      console.log(this.regDetail);
      this.log.Email=this.regDetail.value.Email;
      this.log.password=this.regDetail.value.password;
      //this.lg. checkuser(this.log).subscribe(res=>{
      this.empService.addOfficer(this.log).subscribe(res=>{
      console.log(res);
      if(res!=null){
      console.log("valid");
      //alert("Sucess");
      Swal.fire('Good job!','You have been Succesfully login')
      this.route.navigate(['/officerDashboard'])
   }
    else{
    Swal.fire('Not Allowed','Please check Email and Password',)
  //alert("Fail");
    this.route.navigate(['/officerLogin'])
    }
    },err=>{
    console.log(err);
    });
  }
}

