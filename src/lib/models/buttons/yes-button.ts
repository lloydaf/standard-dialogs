import { Button } from "./button";
/**
 * Defines a Yes button, returns true when clicked.
 */
export class YesButton implements Button {
  readonly text: string;
  readonly val: any;
  /**
   *
   * @param text Sets the text of the Yes Button, "Yes" by default.
   */
  constructor(text = "Yes") {
    this.text = text;
    this.val = true;
  }
}
