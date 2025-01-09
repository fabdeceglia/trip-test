import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verticalTypeIcon',
  pure: true
})
export class VerticalTypeIconPipe implements PipeTransform {

  transform(verticalType: string): string {
    switch (verticalType) {
      case 'car':
        return 'directions_car';
      case 'hotel':
        return 'bed';
      case 'flight':
        return 'flight'
      case 'train':
        return 'train';
      default:
        return 'explore'
    }
  }

}
