import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product :any={};
  newproduct: any[] = [];

  id;
  ShoppingCart :any ;
  constructor(private activeroute : ActivatedRoute ,
    private ProductServicex :ProductService,private router:Router) {
    this.id = this.activeroute.snapshot.paramMap.get('id');
    if(this.id){
      this.ProductServicex.getbyID(this.id).pipe(take(1)).subscribe(prod=>{
        if(prod){
           this.product=prod ;
          this.newproduct=this.product
          
        }
      })

    
   }


  }
  async ngOnInit() {
   }

 
  
}