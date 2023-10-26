import { Injectable } from '@angular/core';
import { TRANSPORTERS } from 'src/data/transporters';

@Injectable({
  providedIn: 'root',
})
export class TransporterService {

  getTransporters() {
    return TRANSPORTERS;
  }
}
