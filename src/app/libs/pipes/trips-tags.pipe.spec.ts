import { TripsTagsPipe } from './trips-tags.pipe';

describe('TripsTagsPipe', () => {
  it('create an instance', () => {
    const pipe = new TripsTagsPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform', () => {
    const pipe = new TripsTagsPipe();
    
    const tags = ['test', 'boring', 'nice'];
    const transformed = pipe.transform(tags);
    expect(transformed).toEqual('#test #boring #nice');

  });


});
