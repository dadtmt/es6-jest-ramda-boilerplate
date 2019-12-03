import hello from '.';

describe('hello', () => {
  it('says hello to Jane', () => {
    expect(hello('Jane')).toEqual('Hello Jane');
  });
});
