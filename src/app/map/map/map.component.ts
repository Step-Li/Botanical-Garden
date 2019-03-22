import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  active;
  // @ts-ignore
  houses = require('../houses.json');
  // @ts-ignore
  marks = require('../marks.json');

  constructor() {
  }

  ngOnInit() {
  }

  onChanged($event) {
    this.active = $event;
  }

  mouseLeave() {
    this.active = 0;
  }

  mouseEnter(id) {
    this.active = id;
  }

}
