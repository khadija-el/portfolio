import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { DbService, Project } from 'src/app/shared/db.service';
import { SharedService } from 'src/app/shared/service.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  myForm: FormGroup;
  o = new Project();
  title = '';


  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any
    , public service: DbService, public service2: SharedService) { }

  async ngOnInit() {
    this.o = this.data.model;
    this.title = this.data.title;

    setTimeout(() => {
      /*{imagesTo}*/
    }, 100);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(o: any): void {

  }

  goto(url) {
    return window.open(url, '_blank');
  }

  ngOnDestroy(): void {
    this.subs.forEach(e => {
      e.unsubscribe();
    });
  }

}
