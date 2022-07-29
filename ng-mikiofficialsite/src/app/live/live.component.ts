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
  liveInfo: any[] = [];
  host = 'http://localhost:1337';

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
    this.cs.getliveinfo().subscribe((liveData) => {
      console.log(liveData);
      this.liveInfo = liveData.data;
    });
  }
}
