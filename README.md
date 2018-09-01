# Standard Dialogs
A Library that uses the Angular Material Framework for providing standard dialog implementations

## Installation

You can install Standard Dialogs through npm

```
npm install --save standard-dialogs
```

## Usage

After installing the package, make sure you import the module in the module you want to use this in.

For example, in app.module.ts,

```typescript
...
import { StandardDialogsModule } from "@lloydaf/standard-dialogs";
...
@NgModule({
  imports: [StandardDialogsModule],
})
export class  AppModule{}
```
## Dialogs

Currently provides three Dialog Implementations.
1. Alert Prompt: This Dialog is used to alert the user or provide a message to the user. Can be used through AlertPromptService(see open() method).
2. Confirm Prompt: This Dialog is used to get a confirmation action from the user. Can be used through ConfirmPromptService(see open() method).
3. Custom Prompt: This Dialog is used to provide a custom functionality not implemented through the standard Dialogs. Can be used through CustomPromptService(see open()) method.
   
### Using Dialogs

```typescript
...
constructor(
    private confirmService: ConfirmPromptService 
    // inject as you normally inject a service
  ) 
...
openConfirmPrompt(){
    this.confirmService.setContent('Are you sure you want to remove this category?');
    this.confirmService.setTitle('Remove Category');
    this.confirmService.open();
}
...
```

## Buttons
Currently provides three Button Implementations
1. Yes Button: This Button returns true when clicked, default text "Yes".
2. No Button: This Button returns false when clicked, default text "No".
3. Custom Button: This Button is used to provide a custom Button functionality not implemented through the standard Buttons. Needs to be built using ButtonBuilder.

### Using Buttons

```typescript
...
let yesButton = new YesButton();
let customButton = new ButtonBuilder().text('Hi').val('Bye').build();
```
