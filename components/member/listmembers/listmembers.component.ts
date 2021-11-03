import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-listmembers',
  templateUrl: './listmembers.component.html',
  styleUrls: ['./listmembers.component.css']
})
export class ListmembersComponent implements OnInit {

  members: any

  constructor(private ps: MembersService) {
    this.onLoading()
  }
  onLoading() {
    try {
      this.ps.getMembers().subscribe(
        data => {
          this.members = data;
        },
        err => {
          console.log(err)
        });
    } catch (error) {
      console.log(error);
    }
  }


  ngOnInit(): void {
  }

}
