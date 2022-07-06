import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @ViewChild('loading', { static: true }) loading: ElementRef<HTMLDivElement>;
  constructor() {}

  ngOnInit(): void {
    const loading = this.loading.nativeElement;
    window.onload = function () {
      loading.classList.add('loaded');
    };
  }
}
