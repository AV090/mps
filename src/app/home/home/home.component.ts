import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../services/banner.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bS: BannerService) { }

  ngOnInit() {
    this.bS.paths.next(["/assets/img/pic1.jpeg",
      "/assets/img/pic2.jpeg",
      "/assets/img/pic3.jpeg",
      "/assets/img//pic4.jpeg",
      "/assets/img/pic5.jpeg"])
  }

}
