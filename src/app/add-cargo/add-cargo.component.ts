import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import CARGO_TYPES from '../../data/cargo_types';
import { CargoService } from '../services/cargo.service';
import { Router } from '@angular/router';
import { CargoType } from 'src/interfaces';

@Component({
  selector: 'app-add-cargo',
  templateUrl: './add-cargo.component.html',
  styleUrls: ['./add-cargo.component.css'],
})
export class AddCargoComponent {
  cargoTypes = CARGO_TYPES;
  submitted = false;

  addForm = this.formBuilder.group({
    location: ['', Validators.required],
    cargo_type: ['', Validators.required],
    cargo_weight: ['', Validators.required],
    dimensions: this.formBuilder.group({
      l: ['', Validators.required],
      w: ['', Validators.required],
      h: ['', Validators.required],
    }),
  });

  constructor(private formBuilder: FormBuilder, private cargoService:CargoService, private router: Router) {}

  saveCargo()
  {
    this.submitted = true;
    const data:CargoType = {
      location: this.addForm.value.location as string,
      cargo_type: this.addForm.value.cargo_type as string,
      cargo_weight: this.addForm.value.cargo_weight as any,
      dimensions: this.addForm.value.dimensions,
    };

    this.cargoService.addItem(data)

    this.router.navigateByUrl('/?success=true');
  }
}
