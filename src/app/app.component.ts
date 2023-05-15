import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ topicName }}</h2>
    <div *ngIf="isVisible">{{ getInfo() }}</div>
    <div>Created At: {{ creationDate | date : 'short' }}</div>
    <app-channel [name]="name"></app-channel>
  `,
})
export class AppComponent {
  name = 'Channel Name';
  topicName = 'Angular Change Detection';
  isVisible = true;
  creationDate = new Date();

  constructor(private cdr: ChangeDetectorRef) {
    console.error(this.cdr); // observe this data-structure // context: AppComponent
    setTimeout(() => {
      this.topicName = 'Zone JS in angular';
      console.log('Topic name changed to:' + this.topicName);
      this.cdr.detectChanges();
    }, 3000);
  }

  getInfo(): string {
    return `Some Info here`;
  }
}
