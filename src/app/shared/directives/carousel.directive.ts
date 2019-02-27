import { Directive, Input, ElementRef, Renderer2, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit, OnChanges {

  @Input() listItems: Array<string>;
  @Input() time: Number;
  item = 0
  imgPath = ''
  private intervalTimer;

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  ngOnInit() {

    this.intervalTimer = setInterval(() => {
      console.log(this)
      this.changeImgPath()
    }, 5000)
  }

  ngOnChanges(s: SimpleChanges) {
    this.item = 0;
    this.changeImgPath(-1);
  }


  private changeImgPath(index?: number) {
    this.item = (this.item + (index || 1)) % this.listItems.length
    this.item = this.item >= 0 ? this.item : 0
    this.imgPath = this.listItems[this.item]
    this.el.nativeElement.src = this.imgPath
    if (this.listItems.length <= 1) {
      clearInterval(this.intervalTimer)
    } else {
      this.renderer.addClass(this.el.nativeElement, 'fade')
      setTimeout(() => {

        this.renderer.removeClass(this.el.nativeElement, 'fade')
      }, 1500)
    }
  }

}
