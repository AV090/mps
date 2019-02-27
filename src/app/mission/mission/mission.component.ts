import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  constructor(private bs: BannerService) { }

  ngOnInit() {
    this.bs.paths.next(['/assets/img/mission.jpeg'])
  }
}
