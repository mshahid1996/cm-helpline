import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})

export class HomeComponent {
  title = 'helpLine';

  
  images = [
    {src: "http://cmhelpline.mp.gov.in/UINew/img/mygov_16175623231581.jpg"},
    {src: "http://cmhelpline.mp.gov.in/UINew/img/CM-Helpline-banner-process.jpg"},
    {src: "http://cmhelpline.mp.gov.in/UINew/img/cm-helpline-whatsapp-banner-1920.jpg"},
    {src: "http://cmhelpline.mp.gov.in/UINew/img/Banner-1.jpg"}
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}