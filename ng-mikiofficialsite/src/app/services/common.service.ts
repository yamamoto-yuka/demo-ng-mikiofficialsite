import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Homebanners,Homelive, Liveinfos, Discographys } from '../interfaces/interface';
import { Discography } from '../interfaces/interface';
import { Contact } from '../interfaces/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  server = environment.server;
  discographyURL = 'http://localhost:1337/api/discographies?populate=*';
  contactURL = 'http://localhost:1337/api/contacts';
  liveURL = 'http://localhost:1337/api/lives?populate=*';

  constructor(private http: HttpClient) {}

  getHomeBanner() {
    return this.http.get<Homebanners>(this.server + '/api/banners?populate=deep');
  }

  getHomelive() {
    return this.http.get<{data:Homelive}>(this.server + '/api/homeliveinfo');
  }

  getDiscographies() {
    return this.http.get<Discographys>(this.server + '/api/discographies?populate=deep');
  }

  getliveinfo() {
    return this.http.get<Liveinfos>(this.server + '/api/lives?populate=deep');
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
    return this.http.post<{ data: Contact }>(this.server + '/api/contacts', contactbody);
  }
}
