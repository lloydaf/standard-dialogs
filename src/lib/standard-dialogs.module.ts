import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
@NgModule({
  imports: [
    MatDialogModule
  ],
  declarations: [DialogComponent],
  exports: [DialogComponent]
})
export class StandardDialogsModule { }
