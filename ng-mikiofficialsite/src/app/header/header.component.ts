import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav: ElementRef<HTMLDivElement>;
  @ViewChild('ham', { static: true }) ham: ElementRef<HTMLDivElement>;
  @Input() livePage: boolean = false;
  @Input() discPage: boolean = false;
  @Input() contactPage: boolean = false;
  @Input() bioPage: boolean = false;
  @Input() goodsPage: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.ham.nativeElement.addEventListener('click', () => {
      this.ham.nativeElement.classList.toggle('active');
      this.nav.nativeElement.classList.toggle('active');
    });
  }
}
