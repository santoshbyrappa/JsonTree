import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MessageService } from './messages.service';
import { Message } from './IMessage';

@Component({
  selector: 'app-shared-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.messages.subscribe((msg) => {
      this.messages.push(msg);
      setTimeout(() => {
        this.messages.shift();
      }, 3000);
    });
  }

  clear(index) {
    this.messages.splice(index, 1);
  }
}
