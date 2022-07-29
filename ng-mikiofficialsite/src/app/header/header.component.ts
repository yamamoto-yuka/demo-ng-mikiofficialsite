import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isactive:boolean = false;

  constructor() {}

  navBtn(){
    this.isactive = !this.isactive;
  }

  ngOnInit(): void {

  }
}
