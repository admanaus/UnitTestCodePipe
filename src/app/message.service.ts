import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  getMostRecent(): string {
    if (this.messages.length > 0){
      return this.messages.pop();
    }
    return "";
  }
}
