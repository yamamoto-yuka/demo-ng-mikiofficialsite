import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  contactBg: string = '../../assets/footer/contact_bg.png';
  constructor() {}

  ngOnInit(): void {}
}
