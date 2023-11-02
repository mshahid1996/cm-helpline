import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
  encapsulation: ViewEncapsulation.None,


})
export class PiechartComponent {

  public data: object[] 
  public ChartTitle: string;
 
  constructor( private route:Router) {  
    this.ChartTitle= ""

    this.data =[

      {name:'Indore',value:37,text: '15%'},

      {name:'Ujjian',value:17,text: '25%'},

      {name:'Devas',value:19,text: '18%'},

      {name:'Ratlam',value:4,text: '9%'},

      {name:'Dhar',value:11,text: '11%'},

      {name:'Bhopal',value:13,text: '3%'},

      {name:'Jabalpur',value:13,text: '5%'},

      {name:'Riwa',value:13,text: '8%'},

      {name:'Sagar',value:13,text: '6%'},

    ];
  }
  ngOnInit(): void {
  }
  logout(){
    Swal.fire('Good job!','You have been Succesfully logged-out')
      this.route.navigate(['/officerLogin'])
  }
}
