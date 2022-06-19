import { Component, OnInit, EventEmitter, Input, } from '@angular/core';
import { Image } from '../Models/image.module ';
import { trigger, state, style, animation, transition, animate } from '@angular/animations'
@Component({
  selector: 'app-gallrey-carousal',
  templateUrl: './gallrey-carousal.component.html',
  styleUrls: ['./gallrey-carousal.component.css'],
  animations: [
    trigger('slide-in', [
      state('left', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('middle', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('right', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('left => middle', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('250ms')
      ]),
      transition('middle => *', [
        animate('250ms')
      ])
    ])
  ]
})
export class GallreyCarousalComponent implements OnInit {
  @Input() images: Array<Image> = new Array<Image>();
  @Input() selectImage: number = 0;
  @Input() closeCoursol = new EventEmitter<void>();
  public animStata = 'middle';
  public animImage: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.animImage = this.selectImage;

  }
  public onEvent(event: Event): void {
    event.stopPropagation();
  }
  public close(): void {
    alert("closde")
    this.closeCoursol.emit();
  }
  public provies(): void {
    this.animStata = 'left';
    this.selectImage = this.selectImage > 0 ? this.selectImage - 1 : this.images.length - 1;
    this.blur();
  }
  public next(): void {
    this.animStata = 'right';
    this.selectImage = this.selectImage < this.images.length - 1 ? this.selectImage + 1 : 0;
    this.blur();
  }
  public AnimDone(): void {
    this.animImage = this.selectImage;
    this.animStata = 'middle';
  }
  public blur(): void {
    const activeElemnet = document.activeElement as HTMLElement;
    if (activeElemnet !== null) {
      activeElemnet.blur();
    }
  }
}
