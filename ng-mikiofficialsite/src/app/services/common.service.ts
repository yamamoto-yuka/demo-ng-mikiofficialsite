import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Homebanner } from '../interfaces/interface';
import { Homelive } from '../interfaces/interface';
import { Discography } from '../interfaces/interface';
import { Contact } from '../interfaces/interface';
import { Liveinfo } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  homebannerURL = 'http://localhost:1337/api/banners?populate=*';
  homeliveinfoURL = 'http://localhost:1337/api/homeliveinfo';
  discographyURL = 'http://localhost:1337/api/discographies?populate=*';
  contactURL = 'http://localhost:1337/api/contacts';
  liveURL = 'http://localhost:1337/api/lives?populate=*';

  constructor(private http: HttpClient) {}

  getHomeBanner() {
    return this.http.get<{ data: [Homebanner[]] }>(this.homebannerURL);
  }

  getHomelive() {
    return this.http.get<{ data: Homelive }>(this.homeliveinfoURL);
  }

  getDiscographies() {
    return this.http.get<{ data: [Discography[]] }>(this.discographyURL);
  }

  getliveinfo() {
    return this.http.get<{ data: [Liveinfo[]] }>(this.liveURL);
  }

  postContact(name: string, email: string, subject: string, content: string) {
    let contactbody = {
      data: {
        name: name,
        email: email,
        subject: subject,
        content: content,
      },
    };
    return this.http.post<{ data: Contact }>(this.contactURL, contactbody);
  }
}
