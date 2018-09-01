import { Button } from "./button";

export class YesButton implements Button {
  readonly text: string;
  readonly val: any;
  constructor(text = "Yes") {
    this.text = text;
    this.val = true;
  }
}
