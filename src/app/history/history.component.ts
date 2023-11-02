import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Usercomplaint } from '../model/usercomplaint';
import { UserService } from '../service/user.service';
import { ComplaintStatusOfficerComponent } from '../complaint-status-officer/complaint-status-officer.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

   regform!: FormGroup;
   userList : any;
   reg=new  Usercomplaint();
   regformlist: any;
  
  constructor(private formBuilder: FormBuilder, private empService: UserService,private route:Router) { }

  ngOnInit(): void {
    // this.getAllUserComplaint();
    this.regform = this.formBuilder.group({
     
      id : [''],

      name: [''],

      number: [''],

      area:[''],
      
      details : [''],

    });
  }
  logout(){
    Swal.fire('Good job!','You have been Succesfully logged-out')
      this.route.navigate(['/officerLogin'])
  }
 

}
