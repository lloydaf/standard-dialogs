import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../components/dialog/dialog.component";
import { Dialog } from "../models/dialog";
import { DialogBuilder } from "../builders/dialog-builder";
import { YesButton } from "../models/buttons/yes-button";
/**
 * Service that is used to open an Alert Prompt.
 */
@Injectable({
  providedIn: "root"
})
export class AlertPromptService {
  private title: string;
  private content: string;
  private text: string;
  constructor(private dialog: MatDialog) {
    this.title = "Alert";
    this.content = "This is a popup";
    this.text = "Ok";
  }

  /**
   * @param title - Sets the title of the Alert Prompt.
   */
  setTitle = title => {
    this.title = title;
  };

  /**
   * @param content - Sets the content of the Alert Prompt.
   */
  setContent = content => {
    this.content = content;
  };

  /**
   * @param text - Sets the text of the Button used in the Alert Prompt.
   */

  setButtonText = text => {
    this.text = text;
  };

  /**
   * Used to open the Alert Prompt
   */
  open = () => {
    const dialogObj: Dialog = new DialogBuilder()
      .title(this.title)
      .content(this.content)
      .addButton(new YesButton(this.text))
      .build();
    this.dialog.open(DialogComponent, {
      data: {
        dialog: dialogObj
      }
    });
  };
}
