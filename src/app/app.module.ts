import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { OfficerLoginComponent } from './officer-login/officer-login.component';
import { OfficerDashboardComponent } from './officer-dashboard/officer-dashboard.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ComplainantInfoComponent } from './complainant-info/complainant-info.component';
import { ComplaintStatusOfficerComponent } from './complaint-status-officer/complaint-status-officer.component';
import { HistoryComponent } from './history/history.component';
import{ ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { ComplaintBoxComponent } from './complaint-box/complaint-box.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ComplaintUserStComponent } from './complaint-user-st/complaint-user-st.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ResponceComplainComponent } from './responce-complain/responce-complain.component';
  import { from } from 'rxjs';
  import { NgChartsModule } from'ng2-charts'; 
  import { AccumulationChartModule,PieSeriesService} from '@syncfusion/ej2-angular-charts';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    OfficerLoginComponent,
    OfficerDashboardComponent,
    ComplaintStatusComponent,
    UserRegistrationComponent,
    ComplainantInfoComponent,
    ComplaintStatusOfficerComponent,
    HistoryComponent,
    ComplaintBoxComponent,
    UserdashboardComponent,
    UserloginComponent,
    ComplaintUserStComponent,
    PiechartComponent,
    ResponceComplainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    AccumulationChartModule
  ],
  providers: [PieSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
