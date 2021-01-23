import { Component, OnInit } from '@angular/core';
import { animations } from '../../shared/animations';
import { DbService } from 'src/app/shared/db.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: animations
})
export class SkillsComponent implements OnInit {
  state = 'hide';

  list = this.service.skills();

  constructor(private service: DbService) { }

  ngOnInit() {

  }
}
