import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { animations } from '../../shared/animations';
import { DbService, About } from 'src/app/shared/db.service';
import { SharedService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: animations,
})
export class AboutComponent implements OnInit {
  @Input() events = new Observable<number>();
  counter = 5;
  // list = [1, 2, 3, 4];
  img = 'assets/skills.png';
  state = 'hide';
  o = new About();
  constructor(private service: DbService, public service2: SharedService) {}

  ngOnInit(): void {
    this.service.about().subscribe(r => {
      this.o = r;
    });
  }

  scrollTo(section: string = 'section3') {
    document.querySelector('#' + section).scrollIntoView({ behavior: 'smooth', block: 'center' });
    // this.currentSection = section;
  }
}
