import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  isShow = true;

  // tslint:disable-next-line:typedef
  hidden() {
    this.isShow = false;
  }
  // tslint:disable-next-line:typedef

  ngOnInit(): void {
  }

}
