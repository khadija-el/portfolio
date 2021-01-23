import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, take, delay, map } from 'rxjs/operators';
import { animate, AnimationBuilder, style } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {

  splashScreenElem: HTMLElement;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document,
    private animationBuilder: AnimationBuilder) {
    this.init();
  }

  init() {
    this.splashScreenElem = this.document.body.querySelector('#splash-screen');

    if (this.splashScreenElem) {
      this.router.events.pipe(
        map(e => {
          // console.log(e);
          return e;
        }),
        filter(event => event instanceof NavigationEnd),
        take(1),
        delay(700)
      ).subscribe(() => this.hide());
    }
  }

  hide() {
    const player = this.animationBuilder.build([
      style({
        opacity: 1
      }),
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({
        opacity: 0
      }))
    ]).create(this.splashScreenElem);

    player.onDone(() => this.splashScreenElem.remove());
    player.play();
  }
}
