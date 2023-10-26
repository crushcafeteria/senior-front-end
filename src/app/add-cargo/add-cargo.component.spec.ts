import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCargoComponent } from './add-cargo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CargoService } from '../services/cargo.service';

describe('AddCargoComponent', () => {
  let component: AddCargoComponent;
  let fixture: ComponentFixture<AddCargoComponent>;
  let DATA = {
    location: 'Nairobi',
    cargo_type: 'BALE',
    cargo_weight: '555',
    dimensions: {
      l: '9',
      w: '9',
      h: '9',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCargoComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(AddCargoComponent);
    component = fixture.componentInstance;

    component.addForm.setValue(DATA);

    fixture.detectChanges();
  });

  it('fills form correctly', () => {
    expect(component.addForm.value.location).toBe('Nairobi');
    expect(component.addForm.value.cargo_type).toBe('BALE');
    expect(component.addForm.value.cargo_weight).toBe('555');
  });

  // it('can save form data', () => {
  //   component.saveCargo();

  //   const ls = localStorage.getItem(CargoService.STORE_KEY) as string

  //   expect(
  //     JSON.parse(ls)[0]
  //   ).toEqual(DATA);
  // });
});
