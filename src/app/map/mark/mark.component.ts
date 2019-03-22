import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {

  @Input() data;
  @Input() active;
  @Output() onChanged = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  mouseEnter() {
    this.onChanged.emit(this.data.id);
  }

  mouseLeave() {
    this.onChanged.emit(0);
  }

}
