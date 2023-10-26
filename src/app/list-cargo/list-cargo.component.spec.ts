import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCargoComponent } from './list-cargo.component';

describe('ListCargoComponent', () => {
  let component: ListCargoComponent;
  let fixture: ComponentFixture<ListCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCargoComponent]
    });
    fixture = TestBed.createComponent(ListCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
