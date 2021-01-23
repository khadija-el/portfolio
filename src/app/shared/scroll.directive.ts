import { Directive, Output, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit, OnDestroy {

  @Output() visibilityChange = new Subject<boolean>();
  sub: Subscription = null;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.sub = this.intersection().subscribe(isVisible => {
      // console.log(isVisible);
      this.visibilityChange.next(isVisible);
    });
  }

  intersection() {
    const cfg: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0]
    };

    return new Observable<boolean>(obs => {

      const inter = new IntersectionObserver((entries, o) =>
        entries.forEach((e) => (e.isIntersecting || e.intersectionRatio > 0) ? obs.next(true) : obs.next(false))/*, cfg*/);

      inter.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
