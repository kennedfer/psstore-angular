import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-tag',
  templateUrl: './card-tag.component.html',
  styleUrls: ['./card-tag.component.css'],
})
export class CardTagComponent {
  @Input() isExclusive: boolean = true;
}
