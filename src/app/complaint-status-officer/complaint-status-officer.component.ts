import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Usercomplaint } from '../model/usercomplaint';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaint-status-officer',
  templateUrl: './complaint-status-officer.component.html',
  styleUrls: ['./complaint-status-officer.component.css']
})
export class ComplaintStatusOfficerComponent implements OnInit {

  regform!: FormGroup;
  reg=new  Usercomplaint();
  regformlist: any;
  userList : any;
  diptList: any;

  constructor(private formBuilder: FormBuilder, private empService: UserService,private route:Router) { }

  ngOnInit(): void {
    this.getAllUserComplaint();
    this.regform = this.formBuilder.group({
     
      id : [''],

      name: [''],

      number: [''],

      area:[''],
      
      details : [''],

    });
  }

  getAllUserComplaint() {
    this.empService. getAllUserComplaint().subscribe(
      (res) => {
        this.userList = res;
    
        console.log(res);
      },
      (err) => {
        console.log('error while getinh data');
      }
    );
  }

  deleteUserComplain(emp :Usercomplaint) {

    this.empService.deleteUserComplain(emp.id).subscribe(res=>{
      console.log(res);
      this.getAllUserComplaint();
    },err =>{
      console.log(err);
    });
  
  }
  logout(){
    Swal.fire('Good job!','You have been Succesfully logged-out')
      this.route.navigate(['/officerLogin'])
  }
 
}