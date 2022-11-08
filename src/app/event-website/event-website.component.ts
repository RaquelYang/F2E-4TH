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
    this.descriptionAnimation();
  }

  bannerAnimation() {
    gsap.to('.banner-img-1', {
      duration: 0.5,
      ease: "back.out(0.5)",
      xPercent: 280,
      scrollTrigger: {
        trigger: document.body,
        start: '100px 100px',
        end: '+=10',
        scrub: 1,
      },
    });

    gsap.to('.banner-img-2', {
      duration: 0.5,
      ease: "back.out(0.5)",
      xPercent: -260,

      scrollTrigger: {
        trigger: document.body,
        start: '110px 100px',
        end: '+=10',
        scrub: 1,
      },
    });

    gsap.to('.banner-img-3', {
      duration: 0.5,
      ease: "back.out(0.5)",
      xPercent: 255,
      scrollTrigger: {
        trigger: document.body,
        start: '120px 100px',
        end: '+=10',
        scrub: 1,
      },
    });

    gsap.to('.banner-img-4', {
      xPercent: -320,
      duration: 0.5,
      ease: "back.out(0.5)",
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

  descriptionAnimation() {
    gsap.to('.description', {
      opacity: 1,
      y: 50,
      scrollTrigger: {
        trigger: ".section2-description",
        start: '60px 100px',
        end: '+=40',
        scrub: 1,
      },
    });

    gsap.to('.description-img-1', {
      opacity: 1,
      y: 50,
      scrollTrigger: {
        trigger: ".section2-description",
        start: '80px 100px',
        end: '+=40',
        scrub: 1,
      },
    });

    gsap.to('.description-img-2', {
      opacity: 1,
      y: 50,
      scrollTrigger: {
        trigger: ".section2-description",
        start: '100px 100px',
        end: '+=40',
        scrub: 1,
      },
    });

    gsap.to('.description-img-3', {
      opacity: 1,
      y: 50,
      scrollTrigger: {
        trigger: ".section2-description",
        start: '120px 100px',
        end: '+=40',
        scrub: 1,
      },
    });
  }


}
