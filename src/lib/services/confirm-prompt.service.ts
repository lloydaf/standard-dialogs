import { Injectable, EventEmitter } from "@angular/core";
import { DialogComponent } from "../components/dialog/dialog.component";
import { YesButton } from "../models/buttons/yes-button";
import { NoButton } from "../models/buttons/no-button";
import { Dialog } from "../models/dialog";
import { DialogBuilder } from "../builders/dialog-builder";
import { MatDialog } from "@angular/material/dialog";
/**
 * Service that is used to open a Confirm Prompt
 */
@Injectable({
  providedIn: "root"
})
export class ConfirmPromptService {
  private title: string;
  private content: string;
  /**
   * result$ - EventEmitter, subscribing to result$ will give you the result of 
   * the Confirm Prompt.
   */
  public result$: EventEmitter<boolean>;
  
  constructor(private dialog: MatDialog) {
    this.title = "Confirm";
    this.content = "Are you sure?";
    this.result$ = new EventEmitter();
  }

  /**
   * @param title - Sets the title of the Confirm Prompt.
   */
  setTitle = title => {
    this.title = title;
  };

  /**
   * @param content - Sets the content of the Confirm Prompt.
   */

  setContent = content => {
    this.content = content;
  };

  /**
   * Used to open the Confirm Prompt.
   */
  open = () => {
    const dialogObj: Dialog = new DialogBuilder()
      .title(this.title)
      .content(this.content)
      .addButton(new YesButton())
      .addButton(new NoButton())
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
