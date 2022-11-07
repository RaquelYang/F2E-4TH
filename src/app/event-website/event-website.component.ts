import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


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
  ];



  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.ScrollAnimations();
  }

  ScrollAnimations() {
    gsap.to('.box', {
      x: 500,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '+=300',
        scrub: 1,
      },
    });
  }


}
