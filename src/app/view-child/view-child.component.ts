import { Component, OnInit, Directive, Input, ViewChild } from '@angular/core';

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
  @ViewChild(Child)
  set child(child: Child) {
    setTimeout(() => {
      this.selectedChild = child.id;
    }, 0);
  }

  selectedChild: string = '';
  shouldShow: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
