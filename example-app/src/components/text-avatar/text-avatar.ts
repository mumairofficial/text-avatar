import { Directive, ElementRef, Input } from '@angular/core';
import { ColorGenerator } from "./color-generator";

@Directive({
  selector: 'text-avatar',
  providers: [ColorGenerator]
})
export class TextAvatar {

  constructor(private element: ElementRef, private colorGenerator: ColorGenerator) { }

  @Input()
  set text(txt: string) {
    this.element.nativeElement.setAttribute("value", txt.charAt(0));
    this.element.nativeElement.style.backgroundColor = this.colorGenerator.getColor(txt);
  }

}
