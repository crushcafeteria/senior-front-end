import { Component } from '@angular/core';
import { CargoService } from '../services/cargo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CargoType } from 'src/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-cargo',
  templateUrl: './search-cargo.component.html',
  styleUrls: ['./search-cargo.component.css'],
})
export class SearchCargoComponent {
  cargoList = [] as CargoType[];
  searchForm = this.formBuilder.group({
    q: ['', Validators.required],
  });
  submitted = false;
  nag = false;

  constructor(
    private cargoService: CargoService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargoList = this.cargoService.getAllCargo();
    
    if(this.route.snapshot.queryParamMap.has('success')) {
      this.nag = true;
    }
  }

  // Search cargo by multiple fields
  onSearch() {
    this.submitted = true;
    
    const items = this.cargoService.getAllCargo()
    this.cargoList = items.filter(cargo => {
      let hit = false;
      const q = this.searchForm.value.q?.toLowerCase() as string;
      
      if (cargo.cargo_type.toLowerCase().includes(q)) hit = true;
      if (cargo.location.toLowerCase().includes(q)) hit = true;

      return hit
    });
  }
}
