import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class SharkDirective {
  friend = 'Human';

  constructor(el: ElementRef, renderer: Renderer2) {
    const sharkPrefix = renderer.createText('Shark ');
    renderer.appendChild(el.nativeElement, sharkPrefix);
  }
}
