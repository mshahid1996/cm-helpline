import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Usercomplaint } from '../model/usercomplaint';
import { Officer } from '../model/officer';
import { Userlogin } from '../model/userlogin';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  complainUrl:string;
  baseUrl : string;
  constructor(private http : HttpClient) { 
    this.baseUrl ='https://localhost:44381/api/Registration/'
    this.complainUrl='https://localhost:44381/api/Complain/'
  }
  addUser(emp : User): Observable<User>{
    return this.http.post<User>(this.baseUrl+'PostUser',emp);
  }
  addOfficer(emp : Officer): Observable<Officer>{
    return this.http.post<Officer>(this.baseUrl+'PostOfficer',emp);
  }
  addUserLogin(emp : Userlogin): Observable<Userlogin>{
    return this.http.post<Userlogin>(this.baseUrl+'PostUserLogin',emp);
  }

  getAllUser() :Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+'GetUsers');
  }

  // updateUser(emp : any) :Observable<User>{
  //   return this.http.put<User>(this.baseUrl+'PutUser',emp);
  // }

  deleteUser(emp :any) : Observable<User>{
    return this.http.delete<User>(this.baseUrl+'DeleteUser?Id='+emp.id)
  }
  getAllUserComplaint() :Observable<Usercomplaint[]>{
    return this.http.get<Usercomplaint[]>(this.complainUrl+'GetComplain');
  }
  addComplain(emp : Usercomplaint) : Observable<Usercomplaint>{
    return this.http.post<Usercomplaint>(this.complainUrl+'PostComplain',emp);
  }
  deleteUserComplain(emp :any) : Observable<User>{
    return this.http.delete<User>(this.complainUrl+'DeleteComplain?id='+emp);
  }
  getComplain(emp : any) : Observable<User>{
    return this.http.get<User>(this.complainUrl+'GetComplain?number='+emp);
  }

}
