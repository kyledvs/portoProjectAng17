import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockItemComponent } from './create-stock-item.component';

describe('CreateStockItemComponent', () => {
  let component: CreateStockItemComponent;
  let fixture: ComponentFixture<CreateStockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStockItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
