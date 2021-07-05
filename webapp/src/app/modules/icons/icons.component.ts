import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';
import { icons } from './icons';

@Component({
  selector: 'icons',
  template: '<ng-content></ng-content>',
  styles: [
    `
      :host::ng-deep svg.icon-xs {
        width: 20px;
        height: 20px;
      }
      :host::ng-deep svg.icon-s {
        width: 30px;
        height: 30px;
      }
      :host::ng-deep svg.icon-m {
        width: 40px;
        height: 40px;
      }
      :host::ng-deep svg.icon-l {
        width: 50px;
        height: 50px;
      }
      :host::ng-deep svg.icon-xl {
        width: 60px;
        height: 60px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {
  sizes: any = {
    xs: 'icon-xs',
    s: 'icon-s',
    m: 'icon-m',
    l: 'icon-l',
    xl: 'icon-xl',
  };

  @Input()
  set name(iconName: string) {
    this.element.nativeElement.innerHTML = icons[iconName] || null;
  }
  @Input()
  set size(size: string) {
    this.element.nativeElement.children[0].classList.add(this.sizes[size]);
  }

  constructor(private element: ElementRef) {}
}
