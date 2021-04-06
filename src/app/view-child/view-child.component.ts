import { Component, OnInit, Directive, Input, ViewChild, AfterViewInit } from '@angular/core';

import { SharkDirective } from '../directives/shark.directive';

@Directive({ selector: '[appChild]' })
export class ChildDirective {
  @Input() id!: string;
}

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  friend: string;

  @ViewChild(ChildDirective)
  set appChild(directive: ChildDirective) {
    setTimeout(() => {
      this.selectedChild = directive.id;
    }, 0);
  }

  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.friend = directive.friend;
  }

  selectedChild = '';
  shouldShow = true;

  constructor() { }

  ngOnInit(): void {
    // Does not wait for view to initialize.
    console.log('ViewChild 2nd example before view initialized:', this.friend);
  }

  ngAfterViewInit(): void {
    console.log('ViewChild 2nd example:', this.friend);
  }

  toggle(): void {
    this.shouldShow = !this.shouldShow;
  }
}
