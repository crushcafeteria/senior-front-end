import { Component } from '@angular/core';
import { TransporterService } from '../services/transporter.service';
import { TransporterType } from '../../interfaces';
import { Many, orderBy, sortBy } from 'lodash';

@Component({
  selector: 'app-transporter-list',
  templateUrl: './transporter-list.component.html',
  styleUrls: ['./transporter-list.component.css']
})
export class TransporterListComponent {

  transporters:TransporterType[] = []
  order = 'asc' as any

  constructor(private transporterService: TransporterService){}

  ngOnInit(){
    this.transporters =  this.transporterService.getTransporters()
  }

  // Sort data by any string key 
  sortTransporters(sortKey:string, order:string){
    this.order = order;
    const data = this.transporterService.getTransporters();
    this.transporters = orderBy(data, sortKey, this.order);
  }
}
