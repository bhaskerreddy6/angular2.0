import {Component, NgModule,ViewContainerRef, ViewEncapsulation} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { Modal } from 'angular2-modal/plugins/bootstrap';

import {Tabs} from './tabs';
import {Tab} from './tab';
import {SlideComponent} from './slide';
@Component({
  selector: 'my-app',
  template: `
   
    <tabs>
    <tab tabTitle="Tab 1">
      this is tab1 and sample content to display
    </tab>
    <tab tabTitle="Tab 2">
     <my-slide> </my-slide>
    </tab>
    <tab tabTitle="'Tab 3'">
      <a target="_blank" href="http://www.angulartypescript.com/angular-2-tutorial/" title="Angular 2 Tutorial"> 
       <img src="http://www.angulartypescript.com/wp-content/uploads/2016/03/learn-more-angular-2.png" alt="Smiley face" height="200" width="500">   
      </a>  
    </tab>
      
    </tabs>
  `
})
export class AppComponent {
  get version(): string {
    return window.angular2ModalVer;
  }
}
