import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/chatMessageDto';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: WebSocket;
  chatMessages: ChatMessageDto[] = [];
  
  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8889/chat');

    //Erorr handler
    this.webSocket.onopen = (event) => {
      console.log('Open : ', event);
    };

    this.webSocket.onmessage = (event) => {
      console.log('here', event)
      const chatMessageDto = JSON.parse(event.data); // Extract data from clients
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  // Define sendMessage function to send data to server
  public sendMessage(chatMessageDto: ChatMessageDto){
     this.webSocket.send(JSON.stringify(chatMessageDto) );
  }

  // Close webSocket Connection
  public closeWebSocket(){
    this.webSocket.close();
  }
}
