import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ColorGenerator } from "./color-generator";

@Directive({
  selector: 'text-avatar',
  providers: [ColorGenerator]
})
export class TextAvatarDirective {

  constructor(private element: ElementRef, private colorGenerator: ColorGenerator) { }

  @Input() text: string;
  @Input() color: string;
  @Input() textColor: string;
  ngOnChanges(changes: SimpleChanges) {
    let text = changes['text'] ? changes['text'].currentValue : null;
    let color = changes['color'] ? changes['color'].currentValue : null;
    let textColor = changes['textColor'] ? changes['textColor'].currentValue : '';

    this.element.nativeElement.setAttribute("value", this.extractFirstCharacter(text));
    this.element.nativeElement.style.backgroundColor = this.backgroundColorHexString(color, text);
    this.element.nativeElement.style.color = textColor ? textColor : '';
  }

  private extractFirstCharacter(text: string): string {
    return text.charAt(0) || '';
  }

  private backgroundColorHexString(color: string, text: string): string {
    return color || this.colorGenerator.getColor(text);
  }
}
