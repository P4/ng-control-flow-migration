import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <!-- basic example -->
  <ng-container [ngSwitch]="value">
    <ng-template ngSwitchCase="">empty string</ng-template>
    <ng-template ngSwitchCase="foo">"foo"</ng-template>
  </ng-container>

  <!-- more practical example distilled from a real project -->
  <ng-container [ngSwitch]="buttonVariant">
    <ng-template ngSwitchCase=""><button mat-button>Button</button></ng-template>
    <ng-template ngSwitchCase="raised"><button mat-raised-button>Button</button></ng-template>
    <ng-template ngSwitchCase="stroked"><button mat-stroked-button>Button</button></ng-template>
    <ng-template ngSwitchCase="flat"><button mat-flat-button>Button</button></ng-template>
  </ng-container>
  `,
  styles: [],
})
export class AppComponent {
  value = "" as "" | "foo";
  buttonVariant: "" | "raised" | "stroked" | "flat" = "";
}
