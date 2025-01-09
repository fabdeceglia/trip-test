import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[scrolled]',
  standalone: true
})
export class ScrolledDirective {

  scrolled = output<boolean>();

  @HostListener('scroll', ['$event']) onScroll(event: any) {
    const {scrollHeight, scrollTop, clientHeight} = event.target;

    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
        this.scrolled.emit(true);
    }
  }

}
