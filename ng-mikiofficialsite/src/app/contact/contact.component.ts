import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactBg:string = '../../assets/footer/contact_bg.png';
  name:string ='';
  email:string ='';
  subject:string ='';
  content:string = '';
  constructor(private cs:CommonService, private router:Router) { }

  submit(name:any, email:any, subject:any, content:any){
    this.cs.postContact(this.name, this.email, this.subject, this.content).subscribe(contactData =>{
      console.log(contactData);
      if(contactData.data){
        this.router.navigate(['/confirm']);
      }
    })


  }
  ngOnInit(): void {
  }

}
