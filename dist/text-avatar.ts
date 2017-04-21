import {Directive, ElementRef, Input} from '@angular/core';
import {ColorGenerator} from "./color-generator";

/**
 * Generated class for the TextAvatar directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: 'text-avatar',
  providers: [ColorGenerator]
})
export class TextAvatar {

  constructor(private element: ElementRef, private colorGenerator: ColorGenerator){  }

  @Input()
  set text(txt: string) {
    this.element.nativeElement.style.backgroundColor = this.colorGenerator.getColor(txt);
    this.element.nativeElement.setAttribute("value", txt.charAt(0));
  }

}
