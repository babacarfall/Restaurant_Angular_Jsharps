import { TypePlatModule } from './type-plat.module';

describe('TypePlatModule', () => {
  let typePlatModule: TypePlatModule;

  beforeEach(() => {
    typePlatModule = new TypePlatModule();
  });

  it('should create an instance', () => {
    expect(typePlatModule).toBeTruthy();
  });
});
