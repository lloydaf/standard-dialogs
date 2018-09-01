import { Dialog } from "../models/dialog";
import { Button } from "../models/buttons/button";

export class DialogBuilder {
  private dialogTitle: string;
  private dialogContent: string;
  private dialogButtons: Array<Button>;

  constructor() {
    this.dialogTitle = '';
    this.dialogContent = '';
    this.dialogButtons = new Array();
  }

  title = (title: string): DialogBuilder => {
    this.dialogTitle = title;
    return this;
  };

  content = (content: string): DialogBuilder => {
    this.dialogContent = content;
    return this;
  };

  addButton = (button: Button): DialogBuilder => {
    this.dialogButtons.push(button);
    return this;
  };

  build = () => {
    return new Dialog(this.dialogTitle,this.dialogContent,this.dialogButtons);
  };
}
