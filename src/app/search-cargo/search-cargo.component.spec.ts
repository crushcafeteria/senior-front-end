import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCargoComponent } from './search-cargo.component';
import CARGO_LIST from 'src/data/cargo_list';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CargoService } from '../services/cargo.service';
import { By } from '@angular/platform-browser';
import * as _ from 'lodash';
import { RouterTestingModule } from '@angular/router/testing';

class MockCargoService {
  getAllCargo() {
    return CARGO_LIST;
  }
}

describe('SearchCargoComponent', () => {
  let component: SearchCargoComponent;
  let fixture: ComponentFixture<SearchCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCargoComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: CargoService, useClass: MockCargoService }],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(SearchCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search cargo component', () => {
    expect(component).toBeTruthy();
  });

  it('should load cargo list', () => {
    expect(component.cargoList).toEqual(CARGO_LIST);
  });

  // it('should find specific cargo', () => {
  //   const newCargo = {
  //     location: 'Kisumu',
  //     cargo_type: 'BALE',
  //     cargo_weight: 99,
  //     dimensions: {
  //       l: 99,
  //       w: 99,
  //       h: 99,
  //     },
  //   };
  //   component.cargoList.push(newCargo);

  //   fixture.detectChanges();

  //   expect(_.last(document.querySelectorAll('.list-group-item'))).toContain(
  //     'Kisumu'
  //   );
  // });
});
