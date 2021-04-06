import { ProductService } from './../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.css']
})
export class Top100Component implements OnDestroy , OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject <any> = new Subject();
  products :any[];
filteredProducts :any[];
subscribe :Subscription;
  constructor( private productx : ProductService) {
    this.subscribe=this.productx.get().subscribe(pros=>{
      this.filteredProducts=this.products=pros;
      this.dtTrigger.next();
    });
      
   }
 

  // filter(query){
  //   if(query){
  //     this.filteredProducts=this.products.filter(i=>i.payload.val().name.toLowerCase().includes(query))
  //   }
  //   else{
  //     this.filteredProducts=this.products;
  //   }
  // }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3
  }

  }

}
