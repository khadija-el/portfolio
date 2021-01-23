import { Component, OnInit } from '@angular/core';
import { animations } from '../../shared/animations';
import { DbService } from 'src/app/shared/db.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: animations
})
export class EducationComponent implements OnInit {
  state = 'hide';
  list = this.service.educations();

  constructor(private service: DbService) { }

  ngOnInit() {
  }

}
