import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { UiSwitchModule } from 'ngx-ui-switch';
import { UpdateServerService } from './update-server.service';
import { FileUploader } from 'ng2-file-upload';
import * as io from 'socket.io-client';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  server1="https://demoserveruno.azurewebsites.net";
  server2="https://demoserverdue.azurewebsites.net";
  server3="https://demoservertre.azurewebsites.net";
 /* server1="http://192.168.1.4:3000";
  server2="http://192.168.1.4:3001";
  server3="http://192.168.1.4:3002";*/
  filesToUpload;
  title = 'app';
  matrice=[0,0,0];
  socket:any;


  constructor(private chatService: ChatService,private update:UpdateServerService) {

      this.chatService.getMEssages().subscribe(message=>{
          console.log(message);
          this.matrice[0]=message[0];
          this.matrice[1]=message[1];
          this.matrice[2]=message[2];
      });
  }
  prova;
  /*upload(form){
    console.log(this.filesToUpload);
   this.update.salvaVoce(this.filesToUpload).subscribe((res)=>{
     console.log(res);
   });
  }
  fileEvent(fileInput){
    console.log(fileInput);
    this.filesToUpload = <Array<File>> fileInput.target.files;

}*/
  onChange(event,val){
    console.log(event,val);
    switch (val) {
      case 1:
          this.update.updateStatus(this.server1+"/stat",event).subscribe((resp)=>{
              console.log(resp);

          });
        break;
      case 2:
        this.update.updateStatus(this.server2+"/stat",event).subscribe((resp)=>{
          console.log(resp);

      });
      break;
      case 3:
        this.update.updateStatus(this.server3+"/stat",event).subscribe((resp)=>{
          console.log(resp);

      });
      break;
      default:
        break;
    }
  }


}
