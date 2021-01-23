import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DbService, DataBase } from 'src/app/shared/db.service';
import { PdfService } from '../pdf.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/service.service';
import { animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss'],
  animations: animations,
})
export class CurriculumVitaeComponent implements OnInit {
  zoom = 1;
  state = 'hide';
  @ViewChild('cv') cv: ElementRef;
  o = new DataBase();
  isPrivate = false;
  timeoutHandler = null;

  constructor(private service: DbService, public pdf: PdfService
    , private route: ActivatedRoute, public service2: SharedService) { }

  ngOnInit(): void {
    // setTimeout(() => this.zoom = 1.36, 300);

    this.isPrivate = +this.route.snapshot.paramMap.get('isPrivate') === 1;
    this.service2.private = this.isPrivate ? '/with-private' : '';
    this.service.all().subscribe(r => {
      this.o = r;
      this.o.experiences = this.o.experiences.reverse();
      this.o.educations = this.o.educations.reverse();
      // console.log(this.o.experiences.reverse())
    });

    setTimeout(() => this.state = 'show', 300);
  }

  public mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedown(i: number) {
    this.timeoutHandler = setInterval(() => {
      this.zoom += i;
    }, 100);
  }

  openPDF() {
    this.zoom = 1;
    this.pdf.captureScreen(this.cv.nativeElement);
  }

  downloadPDF() {
    this.zoom = 1;
    this.pdf.downloadPDF(this.cv.nativeElement);
  }

  displayUrl(links: string): string[] {
    const r = links.split(';');

    r.pop();

    return r.filter(e => this.isPrivate ? true : e.endsWith('0')).map(e => e.startsWith('http') ? e.slice(0, -1) : `https://${e.slice(0, -1)}.herokuapp.com` );
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }


}
