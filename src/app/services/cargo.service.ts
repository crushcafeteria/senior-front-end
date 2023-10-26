import { Injectable } from '@angular/core';
import CARGO_LIST from 'src/data/cargo_list';
import { CargoType } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor() { }

  static STORE_KEY = 'cargo_list';

  getAllCargo(){
    let list:CargoType[] = [];

    const raw = localStorage.getItem(CargoService.STORE_KEY);
    if(raw?.length) {
      list = JSON.parse(raw);
    }

    return list;
  }

  addItem(item:CargoType) {
    let list:CargoType[] = this.getAllCargo();

    list = [
      ...list,
      item
    ]

    localStorage.setItem(CargoService.STORE_KEY, JSON.stringify(list));

    return list;
  }
  
}
