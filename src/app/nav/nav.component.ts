import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  mobile: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMobile() {
    this.mobile = !this.mobile;
  }

  closeMobile() {
    this.mobile = false;
  }

}
