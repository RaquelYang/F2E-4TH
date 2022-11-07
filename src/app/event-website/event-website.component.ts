import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-website',
  templateUrl: './event-website.component.html',
  styleUrls: ['./event-website.component.scss']
})
export class EventWebsiteComponent implements OnInit {
  navbar = [
    { name: '關卡資訊'},
    { name: '作品列表'},
    { name: '攻略資源'},
    { name: '求職專區'},
    { name: '登入'},
    { name: '立即報名'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
