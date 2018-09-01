import { Button } from "./button";

export class NoButton implements Button {
  readonly text: string;
  readonly val: any;
  constructor(text = "No") {
    this.text = text;
    this.val = false;
  }
}
