import { NgModule } from "@angular/core";
import { TextAvatarDirective } from './text-avatar';
import { CommonModule } from '@angular/common';
import { ColorGenerator } from './color-generator';

@NgModule({
  imports: [CommonModule],
  declarations: [TextAvatarDirective],
  exports: [TextAvatarDirective],
  providers: [ColorGenerator]
})
export class TextAvatarModule {}
