import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  experience() {
    return this.all().pipe(map(e => e.experiences));
  }

  projects() {
    return this.all().pipe(map(e => e.projects.sort((a, b) => b.id - a.id)));
  }

  skills() {
    return this.all().pipe(map(e => e.skills.sort((a, b) => a.id - b.id)));
  }

  educations() {
    return this.all().pipe(map(e => e.educations.sort((a, b) => b.id - a.id)));
  }

  about() {
    return this.all().pipe(map(e => e.about));
  }

  langs() {
    return this.all().pipe(map(e => e.langs));
  }

  all() {
    return this.http.get<DataBase>('assets/db/database.json');
  }
}

export class DataBase {
  experiences: Experience[] = [];
  projects: Project[] = [];
  skills: Skill[] = [];
  educations: Education[] = [];
  about = new About();
  langs: Lang[] = [];
}

export class Experience {
  id = 0;
  period = '';
  societe = '';
  job = '';
  task = '';
  tech = '';
  links = '';
}

export class Project {
  id = 0;
  title = '';
  date = new Date();
  description = '';
  tech = '';
  image = '';
  url = '';
  isPrivate = false;
  git = '';
}

export class Skill {
  id = 0;
  domaine = '';
  items: { name: string, value: number }[] = [];
}

export class Education {
  id = 0;
  period = '';
  dipolma = '';
  universite = '';
}

export class About {
  intro = '';
  firstName = '';
  lastName = '';
  profession = '';
  image = '';
  info: { icon: string, text: string, name: string, href: string }[] = [];
}

export class Lang {
  id = 0;
  lang = '';
  level = '';
}
