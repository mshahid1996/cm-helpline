import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complainant-info',
  templateUrl: './complainant-info.component.html',
  styleUrls: ['./complainant-info.component.css']
})
export class ComplainantInfoComponent implements OnInit {

  empDetail !: FormGroup;
  array :any=[];
  empObj : User = new User();
  userList : any;
  deptList:any;

  constructor(private formBuilder : FormBuilder, private empService : UserService,private route:Router) { }

  ngOnInit(): void {
 
    this.getAllUser();

    this.empDetail = this.formBuilder.group({
      id : [''],
      Name : [''],
      Address : [''],
      Number : [''],
      Adhar : [''],
      Email : [''],
      Gender : ['']
    });

  }
    addUser(){
      console.log(this.empDetail);
      this.empObj.id = this.empDetail.value.Id;
      this.empObj.Name = this.empDetail.value.Name;
      this.empObj.Address = this.empDetail.value.Address;
      this.empObj.Number = this.empDetail.value.Salary;
      this.empObj.Adhar = this.empDetail.value.Date;
      this.empObj.Email = this.empDetail.value.Email;
      this.empObj.Gender= this.empDetail.value.Gender;


      this.empService.addUser(this.empObj).subscribe(res=>{
        console.log(res);
         this.resetForm();
        this.getAllUser();
      },err=>{
        console.log(err);
      });

    }
      
       resetForm(){
         this.empDetail.controls['Name'].setValue(null);
         this.empDetail.controls['Address'].setValue(null);
         this.empDetail.controls['Number'].setValue(null);
         this.empDetail.controls['Adhar'].setValue(null);
         this.empDetail.controls['Email'].setValue(null);
         this.empDetail.controls['Gender'].setValue(null);

       }
     
      getAllUser(){
 
       this.empService.getAllUser().subscribe(res=>{
        debugger;
         this.userList = res;
        
         console.log(res);
       },err=>{
         console.log("error while  fetching data.")
       });
      }
 
      get1()
   {
    this.empService.getAllUser().subscribe(data=>{
      debugger;
       var x = data;
       this.array=x;
       console.log(x);
    });
  }


  //  editUser(emp : User){
  //    console.log(emp);
  //    this.empDetail.controls['id'].setValue(emp.id);
  //    this.empDetail.controls['Name'].setValue(emp.Name);
  //    this.empDetail.controls['Address'].setValue(emp.Address);
  //    this.empDetail.controls['Number'].setValue(emp.Number);
  //    this.empDetail.controls['Adhar'].setValue(emp.Adhar);
  //    this.empDetail.controls['Email'].setValue(emp.Email);
  //    this.empDetail.controls['Gender'].setValue(emp.Gender);
  //  }

  // updateUser() {
    
  //   this.empObj.id = this.empDetail.value.id;
  //   this.empObj.Name = this.empDetail.value.Name;
  //   this.empObj.Address = this.empDetail.value.Address;
  //   this.empObj.Number = this.empDetail.value.Number;
  //   this.empObj.Adhar = this.empDetail.value.Date;
  //   this.empObj.Email = this.empDetail.value.Date;
  //   this.empObj.Gender= this.empDetail.value.Gender;

  //   this.empService.updateUser(this.empObj).subscribe(res=>{
  //     console.log(res);
  //     this.getAllUser();
  //   },err=>{
  //     console.log(err);
  //   })
  // }
    
   deleteUser(emp :User) {

    this.empService.deleteUser(emp).subscribe(res=>{
      console.log(res);
      this.getAllUser();
    },err =>{
      console.log(err);
    });
   
  }
  logout(){
    Swal.fire('Good job!','You have been Succesfully logged-out')
      this.route.navigate(['/officerLogin'])
  }
   }
   

