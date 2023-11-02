import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint-user-st',
  templateUrl: './complaint-user-st.component.html',
  styleUrls: ['./complaint-user-st.component.css']
})
export class ComplaintUserStComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    Swal.fire('Good job!','You have been Succesfully logged-out')
      this.route.navigate(['/officerLogin'])
  }
}
