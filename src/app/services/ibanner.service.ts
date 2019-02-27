import { Injectable } from '@angular/core';
import { BannerService } from './banner.service';
@Injectable()
export class IBannerService extends BannerService {

    constructor(){
        super();
        console.log('here we are')
    }

}