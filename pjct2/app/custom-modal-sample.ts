import { Component,ElementRef } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class AdditionCalculateWindowData extends BSModalContext {
  constructor(public num1: number, public num2: number) {
    super();
  }
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styles: [`
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ template: `
        <div class="container-fluid custom-modal-container">
            <div class="row custom-modal-header">
                <div class="col-sm-11">
                    <h1>Contact</h1>
                </div>
                <div class="col-sm-1">
                  <button aria-label="Close" class="close" (click)="onClickClose()" type="button">
                      <span aria-hidden="true" (click)="onClose()" >×</span>
                  </button>
                </div>
            </div>
            <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
                <div class="col-xs-12">
                    <div class="jumbotron">
                        <span>Name</span>
                         <input class="form-control" type="text" #name  autofocus>
                    </div>
                    <div class="jumbotron">
                        <span>Sur Name</span>
                         <input class="form-control" type="text" #surname  autofocus>
                    </div>
                    <div class="jumbotron">
                        <span>Message</span>
                        <div>
                         <textarea cols="14" rows ="4" #message  ngModel="message" ></textarea>
                        </div>
                    </div>
                    <div class="jumbotron">
                        <Button (click)="onClickSend(name.value,surname.value,message.value)" >Send</Button>
                    </div>
                </div>
            </div>
        </div>`
})
export class AdditionCalculateWindow implements ModalComponent<AdditionCalculateWindowData> {
  context: AdditionCalculateWindowData;

  public wrongAnswer: boolean;
  name : string = "";
  surname : string = "";
  message : string = "";
  
  constructor(public dialog: DialogRef<AdditionCalculateWindowData>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
  }

  onKeyUp(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }
  
  onClickSend(name,surname,message)
  {
     console.log(name,surname,message);
     console.log(`ngOnChanges`);
  }
  
  onClickClose()
  {
   
    //this.wrongAnswer = true;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  /*beforeClose(): boolean {
    return this.wrongAnswer;
  }*/
}
