import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '@enchainte/sdk';

@Injectable({
  providedIn: 'root'
})
export class VerifierService {
  public openedVerifier = new Subject<{open: boolean, x: number, y: number, date: Date, isDay: boolean, value: string, data: any, hash: Message[]}>();
  public openedVerifierObserver = this.openedVerifier.asObservable();

  constructor() { }

  public openVerifier(x: number, y: number, date: Date, isDay: boolean, value: string, data: any, hash: Message[]) {
    setTimeout(() => {
      this.openedVerifier.next({
        open: true,
        x,
        y,
        date,
        isDay,
        value,
        data,
        hash
      })
    }, 200)
  }
  
  public closeVerifier() {
    this.openedVerifier.next({
      open: false,
      x: null,
      y: null,
      date: null,
      isDay: false,
      value: null,
      data: null,
      hash: null
    })
  }

  public getOpenedObservable() {
    return this.openedVerifierObserver;
  }

}
