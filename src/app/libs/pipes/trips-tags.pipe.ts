import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../../models/trip.model';

@Pipe({
  name: 'tripTags',
  pure: true, 
  standalone: true
})
export class TripsTagsPipe implements PipeTransform {

  transform(tags: Array<string>): string {
    const tagsMapped = tags.map((tag: string) => `#${tag}`);
    return tagsMapped.join(' ');
  }

}
