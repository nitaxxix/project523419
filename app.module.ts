import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShowEventComponent } from './components/event/show-event/show-event.component';
import { InputEventComponent } from './components/event/input-event/input-event.component';
import { AddmemberComponent } from './components/member/addmember/addmember.component';
import { ListmembersComponent } from './components/member/listmembers/listmembers.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowEventComponent,
    InputEventComponent,
    AddmemberComponent,
    ListmembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
