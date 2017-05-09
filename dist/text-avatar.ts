import {Directive, ElementRef, Input, SimpleChanges} from '@angular/core';
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

	@Input() text: string;
	@Input() color: string;
	ngOnChanges(changes: SimpleChanges){
		let text = changes['text'] ? changes['text'].currentValue : '';
		let color = changes['color'] ? changes['color'].currentValue : '';
		if(text){
			this.element.nativeElement.setAttribute("value", text.charAt(0));
			if(color){
				this.element.nativeElement.style.backgroundColor = color;
			}else{
				this.element.nativeElement.style.backgroundColor = this.colorGenerator.getColor(text);
			}
		}
	}
}
