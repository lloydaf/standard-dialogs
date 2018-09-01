import { Button } from "./buttons/button";
/**
 * Defines an immutable Dialog Class.
 */
export class Dialog {
  readonly title: string;
  readonly content: string;
  readonly buttons: Array<Button>;
  readonly closeButton?: boolean;
  constructor(
    title: string,
    content: string,
    buttons: Array<Button>,
    closeButton: boolean = false
  ) {
    this.title = title;
    this.content = content;
    this.buttons = buttons;
    this.closeButton = closeButton;
  }
}
