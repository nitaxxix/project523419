import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class EventServicesService {

  constructor(private http : HttpClient) { }

  event:any;

  addEvent(eventData:any){
    return this.http.post<any>('http://localhost:3000/event/add' , eventData)
    .pipe(map(data => {
      return data
    }))
  }

  getEvent(){
    return this.http.get<any>('http://localhost:3000/event/get')
    .pipe(map(data => {
      if(data){
        this.event = data
        return this.event
      }
      return this.event
    }))
  }

}
