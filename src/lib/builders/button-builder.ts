import { CustomButton } from "../models/buttons/custom-button";
/**
 * Used to build objects of type Button
 */
export class ButtonBuilder {
  /**
   * defines the text of the button being built
   */
  private buttonText: string;
  /**
   * Defines the value returned when the button is clicked
   */
  private buttonVal: any;

  constructor() {
    this.buttonText = "";
    this.buttonVal = null;
  }

  /**
   * @param text - Sets the text of the button being built.
   */
  text = (text: string): ButtonBuilder => {
    this.buttonText = text;
    return this;
  };

  /**
   * @param val - Sets the value that is returned when the button is clicked.
   */
  val = (val): ButtonBuilder => {
    this.buttonVal = val;
    return this;
  };

  /**
   * Builds and returns the Button.
   */
  build = () => {
    return new CustomButton(this.buttonText, this.buttonVal);
  };
}
