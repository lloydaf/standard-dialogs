import { Button } from "./buttons/button";

export class Dialog {
  readonly title: string;
  readonly content: string;
  readonly buttons: Array<Button>;
  constructor(title: string, content: string, buttons: Array<Button>) {
    this.title = title;
    this.content = content;
    this.buttons = buttons;
  }
}
