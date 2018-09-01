import { Button } from "./button";
/**
 * Defines a Custom Button.
 */
export class CustomButton implements Button {
  readonly text: string;
  readonly val: any;
  /**
   *
   * @param text - Sets the text of the Custom Button, no default implementation.
   * @param val  - Sets the value returned when the Custom Button is clicked.
   */
  constructor(text: string, val: any) {
    this.text = text;
    this.val = val;
  }
}
