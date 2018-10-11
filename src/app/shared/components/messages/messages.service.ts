import { Injectable } from '@angular/core';
import { Message } from './IMessage';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class MessageService {

  constructor() {
    console.log('Message Service');
  }

  public messages = new Subject<Message>();


  add(message: Message) {
    this.messages.next(message);
  }

}
