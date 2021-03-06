import configureStore from '../configureStore.prod';

describe('configureStore.prod', () => {
  it('returns a store which conform redux store contract', () => {
    const store = configureStore();
    ['dispatch', 'subscribe', 'getState', 'replaceReducer'].forEach(method => {
      expect(store[method]).toBeInstanceOf(Function);
    });
  });

  it('returns a store which support dispatch thunk', () => {
    const store = configureStore();
    expect(() => store.dispatch(
      () => ({ type: 'UNKNOWN' }))
    ).not.toThrow();
  });
});
