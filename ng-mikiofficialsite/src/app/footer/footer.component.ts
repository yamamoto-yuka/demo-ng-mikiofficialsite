import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() bgimg: string = '../../assets/footer/home_bg.png';
  constructor() {}

  ngOnInit(): void {}
}
