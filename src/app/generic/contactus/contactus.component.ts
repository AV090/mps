import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private bs:BannerService) { }

  ngOnInit() {
    this.bs.paths.next(['/assets/img/contact.jpeg'])
  }

}
