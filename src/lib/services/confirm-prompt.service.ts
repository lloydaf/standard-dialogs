import { Injectable, EventEmitter } from "@angular/core";
import { DialogComponent } from "../components/dialog/dialog.component";
import { YesButton } from "../models/buttons/yes-button";
import { NoButton } from "../models/buttons/no-button";
import { Dialog } from "../models/dialog";
import { DialogBuilder } from "../builders/dialog-builder";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: "root"
})
export class ConfirmPromptService {
  private title: string;
  private content: string;
  private result$: EventEmitter<boolean>;
  constructor(private dialog: MatDialog) {
    this.title = "Confirm";
    this.content = "Are you sure?";
    this.result$ = new EventEmitter();
  }

  setTitle = title => {
    this.title = title;
  };

  setContent = content => {
    this.content = content;
  };

  ngOnInit() {}

  open = () => {
    const dialogObj: Dialog = new DialogBuilder()
      .title(this.title)
      .content(this.content)
      .addButton(new YesButton())
      .addButton(new NoButton())
      .build();
    let dialog = this.dialog.open(DialogComponent, {
      data: {
        dialog: dialogObj
      }
    });
    dialog.afterClosed().subscribe(result => {
      this.result$.emit(result);
    });
  };
}
