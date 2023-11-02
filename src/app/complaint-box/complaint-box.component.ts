import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usercomplaint } from '../model/usercomplaint';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-complaint-box',
  templateUrl: './complaint-box.component.html',
  styleUrls: ['./complaint-box.component.css']
})
export class ComplaintBoxComponent implements OnInit {

  regform!: FormGroup;
  reg=new  Usercomplaint();
  regformlist: any;
  
  diptList: any;

  constructor(private formBuilder: FormBuilder, private ds: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
    this.regform = this.formBuilder.group({
    
      name: [''],

      number: [''],

      area:[''],
      
      category : [''],
      
      details : [''],

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
  addComplain() {
    console.log('fucntio call');

    debugger;

    console.log(this.regform);

    this.reg.number = this.regform.value.number;

    this.reg.area = this.regform.value.area;

    this.reg.details = this.regform.value.details;

    this.ds.addComplain(this.reg).subscribe(
      (res) => {
        console.log(res);
        this.resetForm();
        this.regformlist.RegisterStartupScript(this.addComplain(), "alert", "alert('Insert is successfull')", true);
      },
      (err) => {
        console.log(err);
      }  );
  }
  resetForm(){
    this.regform.value['number'].setValue(null);
    this.regform.value['area'].setValue(null);
    this.regform.value['catagory'].setValue(null);
    this.regform.value['details'].setValue(null);

  }
  

}
