import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a href="" *ngIf="true" #link1>Link 1</a>
  <a href="" #link2>Link 2</a>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild('link1') link1!: ElementRef;
  @ViewChild('link2') link2!: ElementRef;

  constructor() {
    console.log('Constructor: Component instance created');
  }

 

  ngOnInit() {
    console.log('ngOnInit: Component initialized');
    this.logLinks('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck: Change detection run');
    this.logLinks('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content initialized');
    this.logLinks('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Content checked');
    this.logLinks('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View initialized');
    this.logLinks('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: View checked');
    this.logLinks('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component about to be destroyed');
  }


  private logLinks(hook: string) {
    console.log(`${hook} - Link 1:`, this.link1 ? 'Link 1 OK' : 'Link 1 not present');
    console.log(`${hook} - Link 2:`, this.link2 ? 'Link 2 OK' : 'Link 2 not present');
  }  

}
