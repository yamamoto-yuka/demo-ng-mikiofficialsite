import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precontact',
  templateUrl: './precontact.component.html',
  styleUrls: ['./precontact.component.scss']
})
export class PrecontactComponent implements OnInit {
  contactBg: string = '../../assets/footer/contact_bg.png';
  constructor() { }

  ngOnInit(): void {
  }

}