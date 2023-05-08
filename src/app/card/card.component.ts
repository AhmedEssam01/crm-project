import { Component, OnInit, Input } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { DealsService } from './../services/deals.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() items: any;
  
  constructor(private DealsService : DealsService ) { }

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
  }

  delete(id:number){
    this.DealsService.deleteDeals(id).subscribe(res=>{
      console.log(res)
    }
  )
  }



}
