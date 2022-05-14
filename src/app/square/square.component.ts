import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{value}}</button>
    <button nbButton hero status="success" *ngIf="value === 'O'">{{value}}</button>
    <button nbButton hero status="info" *ngIf="value === 'X'">{{value}}</button>
  `,
  styles: [
    `
    button{
      height: 100%;
      width: 100%;
      font-size: 200px;
    }
  `
  ]
})
export class SquareComponent {
  @Input() value: "X" | "O" | undefined;
}
