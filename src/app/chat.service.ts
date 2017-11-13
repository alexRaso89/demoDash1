import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import * as io from 'socket.io-client';

const CHAT_URL = 'https://demoserverping.azurewebsites.net';


@Injectable()
export class ChatService {
  socket:any;
  sendMessage(message){
    this.socket.emit('matrice',message);

  }
  getMEssages(){
    let observable=new Observable(observer=>{
      this.socket=io(CHAT_URL);
      this.socket.on('matrice',(data)=>{
        observer.next(data);
      });
      return ()=>{
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
