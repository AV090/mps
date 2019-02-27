import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  start = true
  paths = new BehaviorSubject<Array<string>>([]);
  constructor() {
    this.start = false
   
  }
}
