import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = `#00e067`;
  title = `Color background`;
  constructor() {
  }

  // tslint:disable-next-line:typedef
  onChangeColor(value) {
    this.color = value;
  }

  ngOnInit(): void {
  }

}
