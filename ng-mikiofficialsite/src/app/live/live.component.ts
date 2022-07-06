import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit {
  liveBg: string = '../../assets/footer/live_bg.png';
  @ViewChild('liveContainer', { static: true })
  liveContainer: ElementRef<HTMLDivElement>;
  // liveInfo: any[] = [];
  host = 'http://localhost:1337';

  liveInfo:any[]=[
    {
      banner:'../../assets/banner/美稀_1stOneManLiveおことばに甘えて1.png',
      alt:'美稀_Live_1stOneManLiveおことばに甘えて',
      data:'2022/6/25 @渋谷gee-ge',
      title:'美稀 1st One Man Live おことばに甘えて',
      time:'OPEN 18:00/START 18:30',
      price:'¥ 2,500 / at door ￥ 3,000(+1 drink)',
      linkName:'公演終了！ありがとう！',
      link:'#'
    },
    {
      banner:'../../assets/banner/美稀_.MOSAiCpresentsCityLightsvol1.png',
      alt:'MOSAiCpresentsCityLightsvol89',
      data:'2022/6/17 @MOSAiC',
      title:'MOSAiC presents CityLights vol89',
      time:'OPEN 18:30/START 19:00',
      price:'¥ 2,400 (+1 drink ￥600)',
      linkName:'公演終了！ありがとう！',
      link:'#'
    }
  ];

  constructor(private cs: CommonService) {}

  animation() {
    const tl = gsap.timeline();
    tl.fromTo(
      this.liveContainer.nativeElement,
      1.5,
      { x: -400 },
      { x: 0, ease: Power2.easeInOut }
    );
  }

  ngOnInit(): void {
    this.animation();
    // this.cs.getliveinfo().subscribe((liveData) => {
    //   console.log(liveData);
    //   this.liveInfo = liveData.data;
    // });
  }
}
