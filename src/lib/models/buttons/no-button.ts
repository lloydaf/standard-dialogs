import { Button } from "./button";
/**
 * Defines a No button, returns false when clicked.
 */
export class NoButton implements Button {
  readonly text: string;
  readonly val: any;
  /**
   * 
   * @param text Sets the text of the No Button, "No" by default.
   */
  constructor(text = "No") {
    this.text = text;
    this.val = false;
  }
}
