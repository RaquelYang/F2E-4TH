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
    this.bannerAnimation();
  }

  bannerAnimation() {
    gsap.to('.banner-img-1', {
      duration: 0.5,
      x: 390,
      ease: "back",
      scrollTrigger: {
        trigger: document.body,
        start: '100px 100px',
        end: '+=10',
        scrub: 1,
      },
    });

    gsap.to('.banner-img-2', {
      duration: 0.5,
      x: -390,
      ease: "back",
      scrollTrigger: {
        trigger: document.body,
        start: '110px 100px',
        end: '+=10',
        scrub: 1,
      },
    });

    gsap.to('.banner-img-3', {
      duration: 0.5,
      x: 420,
      ease: "back",
      scrollTrigger: {
        trigger: document.body,
        start: '120px 100px',
        end: '+=10',
        scrub: 1,
      },
    });

    gsap.to('.banner-img-4', {
      duration: 0.5,
      x: -420,
      ease: "back",
      scrollTrigger: {
        trigger: document.body,
        start: '130px 100px',
        end: '+=10',
        scrub: 1,
      },
    });

    gsap.to('.banner-img-5', {
      yPercent: 220,
      scrollTrigger: {
        trigger: document.body,
        start: '140px 100px',
        end: '+=10',
        scrub: 1,
      },
    });
  }


}
