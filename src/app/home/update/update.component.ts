import { Component, OnInit } from '@angular/core';

import { IBannerService } from 'src/app/services/ibanner.service';
import { BannerService } from 'src/app/services/banner.service';

export function xyzFactory() {
  return new IBannerService();
}
let p = {provide:BannerService,useFactory:xyzFactory}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[p]
})
export class UpdateComponent implements OnInit {

  path=['/assets/img/pic4.jpeg']

  constructor(private bs:BannerService) { }

  ngOnInit() {
    this.bs.paths.next(this.path)
  }

}
