import { Component, OnInit, Directive, Input, ViewChild } from '@angular/core';

import { SharkDirective } from '../directives/shark.directive';

@Directive({ selector: 'child' })
export class Child {
  @Input() id!: string;
}

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {
  friend: string;

  @ViewChild(Child)
  set child(directive: Child) {
    setTimeout(() => {
      this.selectedChild = directive.id;
    }, 0);
  }

  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.friend = directive.friend;
  }

  selectedChild: string = '';
  shouldShow: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Does not wait for view to initialize.
    console.log("ViewChild 2nd example before view initialized:", this.friend);
  }

  ngAfterViewInit() {
    console.log("ViewChild 2nd example:", this.friend);
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
