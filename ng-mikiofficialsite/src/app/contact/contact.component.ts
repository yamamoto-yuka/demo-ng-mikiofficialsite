import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name:string ='';
  email:string ='';
  subject:string ='';
  content:string = '';
  formInValid= true;
  constructor(private cs:CommonService, private router:Router) { }

  resolved(event:any){
    console.log(event);
    if(event){
      this.formInValid = false;
    }
  }

  submit(name:any, email:any, subject:any, content:any){
    this.cs.postContact(this.name, this.email, this.subject, this.content).subscribe(res =>{
      if(res.data){
        this.router.navigate(['/confirm']);
      }
    })


  }
  ngOnInit(): void {
  }

}
