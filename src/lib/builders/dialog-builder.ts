import { Dialog } from "../models/dialog";
import { Button } from "../models/buttons/button";
/**
 * Used to build objects of type Dialog.
 */
export class DialogBuilder {
  private dialogTitle: string;
  private dialogContent: string;
  private dialogButtons: Array<Button>;

  constructor() {
    this.dialogTitle = "";
    this.dialogContent = "";
    this.dialogButtons = new Array();
  }

  /**
   * @param title - Sets the property dialogTitle which is used to build the dialog.
   */
  title = (title: string): DialogBuilder => {
    this.dialogTitle = title;
    return this;
  };
  /**
   * @param content - Sets the property dialogcontent which is used to build the dialog.
   */
  content = (content: string): DialogBuilder => {
    this.dialogContent = content;
    return this;
  };

  /**
   * @param button - Adds a button to the dialog. Should be of type Button. 
   * Use ButtonBuilder if building a Custom Button.
   */
  addButton = (button: Button): DialogBuilder => {
    this.dialogButtons = [...this.dialogButtons,...[button]];
    return this;
  };

  /**
   * @param buttons - Adds multiple buttons to the dialog. All buttons should be of type Button. 
   * Use ButtonBuilder if building a Custom Button.
   * 
   */
  addButtons = (buttons:Array<Button>): DialogBuilder =>{
    this.dialogButtons = [...this.dialogButtons,...buttons];
    return this;
  }

  /**
   * Builds and returns the Dialog.
   */
  build = () => {
    return new Dialog(this.dialogTitle, this.dialogContent, this.dialogButtons);
  };
}
