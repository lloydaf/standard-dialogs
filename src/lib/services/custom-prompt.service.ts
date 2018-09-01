import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Button } from '../models/buttons/button';
import { Dialog } from '../models/dialog';
import { DialogBuilder } from '../builders/dialog-builder';
import { DialogComponent } from '../components/dialog/dialog.component';
/**
 * Service that is used to open a Custom Prompt.
 */
@Injectable({
  providedIn: 'root'
})
export class CustomPromptService {
  private title: string;
  private content: string;
  private buttons: Array<Button>;
  /**
   * result$ - EventEmitter, subscribing to result$ will give you the result of 
   * the Custom Prompt.
   */
  public result$: EventEmitter<boolean>;
  
  constructor(private dialog: MatDialog) {
    this.title = "";
    this.content = "";
    this.result$ = new EventEmitter();
    this.buttons = new Array();
  }

  /**
   * @param title - Sets the title of the Custom Prompt.
   */
  setTitle = title => {
    this.title = title;
  };

  /**
   * @param content - Sets the content of the Custom Prompt.
   */

  setContent = content => {
    this.content = content;
  };

  /**
   * @param buttons - Sets the buttons of the Custom Prompt.
   */
  setButtons = (buttons:Array<Button>) =>{
    this.buttons = buttons;
  }

  /**
   * @param button - Adds a button to the Custom Prompt. Must be of type Button.
   */
  addButton = (button:Button) =>{
    this.buttons = [...this.buttons,...[button]];
  }

  /**
   * Used to open the Custom Prompt.
   */
  open = () => {
    const dialogObj: Dialog = new DialogBuilder()
      .title(this.title)
      .content(this.content)
      .addButtons(this.buttons)
      .build();
    let dialog = this.dialog.open(DialogComponent, {
      data: {
        dialog: dialogObj
      }
    });
    dialog.afterClosed().subscribe(result => {
      this.result$.emit(result);
    });
  };
}
