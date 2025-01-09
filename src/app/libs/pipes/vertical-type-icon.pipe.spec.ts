import { VerticalTypeIconPipe } from './vertical-type-icon.pipe';

describe('VerticalTypeIconPipe', () => {
  it('create an instance', () => {
    const pipe = new VerticalTypeIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform', () => {
    const pipe = new VerticalTypeIconPipe();
    
    expect(pipe.transform('car')).toEqual('directions_car');
    expect(pipe.transform('hotel')).toEqual('bed');
    expect(pipe.transform('train')).toEqual('train');
    expect(pipe.transform('null')).toEqual('explore');

  });


});
