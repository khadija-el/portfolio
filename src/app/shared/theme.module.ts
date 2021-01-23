import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme',
  template: `
    <!-- <mat-slide-toggle #slide color="warn" [formControl]="isChecked"></mat-slide-toggle> -->

    <button mat-button [matMenuTriggerFor]="beforeMenuTheme">
      <mat-icon>palette</mat-icon>
    </button>
    <mat-menu #beforeMenuTheme="matMenu" xPosition="before">
      <mat-radio-group [formControl]="theme" class="d-flex flex-column p-2">
        <mat-radio-button *ngFor="let e of list" [value]="e.id" style="color: var(--color)">{{e.name}}</mat-radio-button>
      </mat-radio-group>
    </mat-menu>
  `,
  styles: [`

  `]
})
export class ThemeComponent implements OnInit {
  isChecked = new FormControl(false);
  theme = new FormControl('default-theme');

  list = [
    {id: 'light-theme', name: 'light'},
    {id: 'dark-theme', name: 'dark'},
  ];

  constructor(private overlayContainer: OverlayContainer, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const theme: string = localStorage.getItem('theme') ?? this.list[0].id;

    // first run
    this.theme.setValue(theme);
    this.changeTheme(theme);

    // on every change
    this.theme.valueChanges.subscribe((t: string) => this.changeTheme(t));
  }

  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);

    document.body.className = theme + ' mat-typography mat-app-background';

    this.themeForBtnNav(theme);
  }

  themeForBtnNav(theme) {
    // this.themeClass = theme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(theme);
  }
}

@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    // MatSlideToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
  ],
  exports: [
    ThemeComponent
  ]
})
export class ThemeModule { }
