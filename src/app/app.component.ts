import { Component, OnInit, HostBinding } from '@angular/core';
import { SplashScreenService } from './shared/splash-screen.service';
import { SharedService } from './shared/service.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public service: SharedService) { }

  ngOnInit() { }
}
