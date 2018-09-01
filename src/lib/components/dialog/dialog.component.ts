import { Component, OnInit, Inject } from "@angular/core";
import { Dialog } from "../../models/dialog";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Button } from "../../models/buttons/button";

@Component({
  selector: "lib-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  public dialog: Dialog;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialog = data.dialog;
  }

  close = (result?)=>{
    this.dialogRef.close(result);
  }

  click(button: Button){
    this.close(button.val);
  }



  ngOnInit() {}
}
