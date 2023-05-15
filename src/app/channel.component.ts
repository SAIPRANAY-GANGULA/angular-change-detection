import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>{{ name }}</p> `,
})
export class ChannelComponent {
  @Input({ required: true }) name!: string;
}
