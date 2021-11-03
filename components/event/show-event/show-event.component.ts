import { Component, OnInit } from '@angular/core';
import { EventServicesService } from 'src/app/services/event/event-services.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {
  event!:any[]
  constructor(private ess : EventServicesService) {
    this.onloadevent()
   }

  ngOnInit(): void {
  }
  onloadevent(){
    try {
      this.ess.getEvent().subscribe(
        data => {
          this.event = data
        },
        err => {
          console.log(err)
        }
      )
    } catch (err) {
      
    }
  }



}
