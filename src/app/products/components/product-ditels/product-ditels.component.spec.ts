import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDitelsComponent } from './product-ditels.component';

describe('ProductDitelsComponent', () => {
  let component: ProductDitelsComponent;
  let fixture: ComponentFixture<ProductDitelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDitelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDitelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
