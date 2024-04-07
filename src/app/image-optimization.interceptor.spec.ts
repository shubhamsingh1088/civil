import { TestBed } from '@angular/core/testing';

import { ImageOptimizationInterceptor } from './image-optimization.interceptor';

describe('ImageOptimizationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ImageOptimizationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ImageOptimizationInterceptor = TestBed.inject(ImageOptimizationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
