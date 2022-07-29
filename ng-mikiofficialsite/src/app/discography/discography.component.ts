import { Component, OnInit } from '@angular/core';
import { Discography } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss']
})
export class DiscographyComponent implements OnInit {
  discographies:Discography[] = [];

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getDiscographies().subscribe(res =>{
      this.discographies = res.data;
    })
  }

}
