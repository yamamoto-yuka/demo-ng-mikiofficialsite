import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss']
})
export class DiscographyComponent implements OnInit {
  discBg:string = '../../assets/footer/discography_bg.png';
  discographies:any[] = [];
  host = "http://localhost:1337";

  // discographies:any[]=[{
  //   cover:'../../assets/cover/息をする.jpeg',
  //   alt:'美稀_discography_息をする',
  //   type:'digital',
  //   title:'息をする',
  //   url:'https://eggs.mu/artist/mikiguitar0624/song/d9d64f07-7267-4cb4-b78b-f3610e88e37a'
  // },
  // {
  //   cover:'../../assets/cover/曖昧な日々.jpeg',
  //   alt:'美稀_discography_曖昧な日々',
  //   type:'digital',
  //   title:'曖昧な日々',
  //   url:'https://eggs.mu/artist/mikiguitar0624/song/a4d6078a-07de-43af-8e8d-4ed04b9b2d6c'
  // },
  // {
  //   cover:'../../assets/cover/6月の花言葉.jpeg',
  //   alt:'美稀_discography_6月の花言葉',
  //   type:'digital',
  //   title:'6月の花言葉',
  //   url:'https://eggs.mu/artist/mikiguitar0624/song/34768667-68e7-419e-b4bb-1051f3799d95'
  // },
// ]

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getDiscographies().subscribe(discographies =>{
      console.log(discographies.data);
      this.discographies = discographies.data;
    })
  }

}
