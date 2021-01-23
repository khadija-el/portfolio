
import { Component, OnInit, HostBinding, ChangeDetectorRef, OnDestroy, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild('div') divHTML: ElementRef;
  mobileQuery: MediaQueryList;
  currentSection = 'section1';
  userImg2 = 'assets/2.png';
  userImg = 'assets/me.png';
  color = 'accent';
  opened = false;
  d = new Date();
  constructor(changeDetectorRef: ChangeDetectorRef, private router: Router,
    private activatedRoute: ActivatedRoute, media: MediaMatcher) {
    // define the limite size
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // mobileQuery.matches is listen for the size
    // wa can now use mobileQuery.matches booleen in the template
    this.mobileQuery.addListener((e: MediaQueryListEvent) => changeDetectorRef.detectChanges());
  }
  ngOnInit(): void {
    // should be removed soon
    TitleComponent.i = 0;
    setTimeout(() => this.opened = true, 800);
  }

  scrollTo(section: string) {
    document.querySelector('#' + section).scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.currentSection = section;
  }

  toggleSideNave() {
    this.divHTML.nativeElement.click();
  }

  private setupRouting() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe((route: ActivatedRoute) => {
      const seo = route.snapshot.data['seo'];
      // set your meta tags & title here
      console.log(seo)
    });
  }

  activatedLink(section: string) {
    const itIs = this.currentSection === section;

    return {
      'background-color': itIs ? 'var(--selected-primary)' : '',
      color: itIs ? 'white' : ''
    };
  }


}

  // firebase use mourabit-mohamed
  // firebase init
  // firebase deploy
