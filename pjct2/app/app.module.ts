import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent }   from './app.component';
import { AdditionCalculateWindow } from './custom-modal-sample';
import {Tabs} from './tabs';
import {Tab} from './tab';
import {SlideComponent} from './slide';
@NgModule({
  imports: [ 
    BrowserModule, 
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [ AppComponent,Tabs, Tab,SlideComponent ],
  bootstrap:    [ AppComponent ],
  
  // IMPORTANT: 
  // Since 'AdditionCalculateWindow' is never explicitly used (in a template)
  // we must tell angular about it.
  entryComponents: [ AdditionCalculateWindow ]
})
export class AppModule { }
