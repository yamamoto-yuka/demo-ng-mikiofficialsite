import { Component, OnInit, Renderer2 } from '@angular/core';
import { Homebanner, Homelive } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banners: Homebanner[] = [];
  liveinfo: Homelive;

  constructor(private cs: CommonService, private renderer:Renderer2) {}

  onIntersection(event:any){
    console.log(event);
      if(event.visible){
        this.renderer.addClass(event.target,'active');
      }else{
        this.renderer.removeClass(event.target,'active');
      }
  }

  ngOnInit(): void {
    // this.animation();
    this.cs.getHomeBanner().subscribe((res) => {
      this.banners = res.data;
    });

    this.cs.getHomelive().subscribe((res) => {
      this.liveinfo = res.data;
    });
  }
}
