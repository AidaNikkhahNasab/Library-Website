import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../services/web-socket.service';
import { ChatMessageDto } from '../models/chatMessageDto';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  // constructor of chatcomponent which is used webSocket
  constructor(public webSocketService: WebSocketService){ }

  // Open webSocket
  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  // Close webSocket
  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }


// Function to send messages to the server
sendMessage(sendForm: NgForm){
  const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
  this.webSocketService.sendMessage(chatMessageDto);
  sendForm.controls['message'].reset();
}

}
