import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { AdditionCalculateWindow, AdditionCalculateWindowData } from './custom-modal-sample';
import {Tabs} from './tabs';
import {Tab} from './tab';

@Component({
  selector: 'my-slide',
  template: `
  
  <button (click)="openCustom()">Open Contact Slideout</button>
  `
  
})
export class SlideComponent {
  get version(): string {
    return window.angular2ModalVer;
  }
  
  constructor(vcRef: ViewContainerRef, public modal: Modal) {
    modal.defaultViewContainer = vcRef;
  }
  
  onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Contact')
        .body(`
            
            <b>Name:</b>
            <input type='text' style='width:100px;' />
             <b>Sur Name:</b>
            <input type='text' style='width:100px;' />
             <b>Messages:</b>
            <textarea cols='4' rows='4' placeholder='Enter Text .....' />
            <br/>
            <button > Send </button>
            `)
        .open();
  }
  
  openCustom() {
    this.modal.open(AdditionCalculateWindow, new AdditionCalculateWindowData(2, 3));
  }
}

