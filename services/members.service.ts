import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  members: any

  constructor(private http: HttpClient) { }

  addMember(member: any) {
    return this.http.post<any>('http://localhost:3000/members/add', member)
      .pipe(map(data => {
        return data
      }))
  }

  getMembers(){
    return this.http.get<any>('http://localhost:3000/members/get')
    .pipe(map(data => {
      if(data){
        this.members =data;
        console.log(this.members);
      }
      return this.members;
    }))
  }
}
