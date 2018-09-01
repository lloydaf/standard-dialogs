import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { DialogComponent } from "./components/dialog/dialog.component";
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [MatDialogModule, CommonModule, MatButtonModule],
  declarations: [DialogComponent],
  exports: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class StandardDialogsModule {}
