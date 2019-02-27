import { Component, OnInit, DoCheck, AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges, Input, ChangeDetectorRef } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit, DoCheck, AfterContentChecked, AfterViewChecked, OnChanges {


  path: Array<string>;
  disabled = true;

  constructor(private bs: BannerService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
   
  }

  ngOnChanges(s: SimpleChanges) {

  }



  ngDoCheck() {

  }

  ngAfterContentChecked() {

  }

  ngAfterViewChecked() {

  }

  validate() {

  }


}
