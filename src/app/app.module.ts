import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { UiSwitchModule } from 'ngx-ui-switch';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
import { UiSwitchModule } from 'ngx-ui-switch';
import { UpdateServerService } from './update-server.service';
import { Http, HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    //FileSelectDirective
  ],
  imports: [
    BrowserModule,
    UiSwitchModule,
    HttpModule,
    FormsModule
  ],
  providers: [ChatService, UpdateServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
