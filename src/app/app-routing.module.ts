import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { OfficerLoginComponent } from './officer-login/officer-login.component';
import { OfficerDashboardComponent } from './officer-dashboard/officer-dashboard.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { ContactComponent } from './contact/contact.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ComplainantInfoComponent } from './complainant-info/complainant-info.component';
import { ComplaintStatusOfficerComponent } from './complaint-status-officer/complaint-status-officer.component';
import { HistoryComponent } from './history/history.component';
import { ComplaintBoxComponent } from './complaint-box/complaint-box.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ComplaintUserStComponent } from './complaint-user-st/complaint-user-st.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ResponceComplainComponent } from './responce-complain/responce-complain.component';

const routes: Routes = [{path:"aboutUs",component : AboutUsComponent},
{path:"home",component : HomeComponent},
{path:"officerLogin",component : OfficerLoginComponent},
{path:"officerDashboard",component : OfficerDashboardComponent},
{path:"complaintStatus",component : ComplaintStatusComponent},
{path:"contact",component : ContactComponent},
{path:"userReg",component : UserRegistrationComponent},
{path:"complainantInfo",component : ComplainantInfoComponent},
{path:"complaintSt",component : ComplaintStatusOfficerComponent},
{path:"history",component : HistoryComponent},
{path:"complain",component : ComplaintBoxComponent},
{path:"userdashboard",component : UserdashboardComponent},
{path:"userllogin",component : UserloginComponent},
{path:"CompSt",component : ComplaintUserStComponent},
{path:"piechart",component : PiechartComponent},
{path:"responcecomplain",component : ResponceComplainComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
