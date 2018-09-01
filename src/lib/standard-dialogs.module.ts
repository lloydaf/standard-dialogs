import { NgModule } from '@angular/core';
import { StandardDialogsComponent } from './standard-dialogs.component';
import { ConfirmPromptComponent } from './components/confirm-prompt/confirm-prompt.component';

@NgModule({
  imports: [
  ],
  declarations: [StandardDialogsComponent, ConfirmPromptComponent],
  exports: [StandardDialogsComponent]
})
export class StandardDialogsModule { }
