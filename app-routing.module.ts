import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputEventComponent } from './components/event/input-event/input-event.component';
import { ShowEventComponent } from './components/event/show-event/show-event.component';
import { HomeComponent } from './components/home/home.component';
import { AddmemberComponent } from './components/member/addmember/addmember.component';
import { ListmembersComponent } from './components/member/listmembers/listmembers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path : 'home' , component: HomeComponent},
  {path : 'addmember', component: AddmemberComponent},
  {path : 'listmember', component: ListmembersComponent},
  {path : 'addEvent' , component : InputEventComponent},
  {path : 'event' , component : ShowEventComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
