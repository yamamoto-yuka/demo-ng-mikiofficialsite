import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  bioBg:string = '../../assets/footer/biography_bg.png';
  constructor() { }

  ngOnInit(): void {
  }

}
