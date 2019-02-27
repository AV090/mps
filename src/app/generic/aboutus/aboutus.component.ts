import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private bs:BannerService) { }

  ngOnInit() {
    this.bs.paths.next(['/assets/img/about.png'])
  }

}
