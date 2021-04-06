import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../../services/categories.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newproduct: any[] = [];
  Filterproduct: any[] = [];
  categroy = '';
  cats;
  id;
  isfavx : boolean = true;
  constructor(private route: ActivatedRoute, private prodService: ProductService,
     private catser: CategoriesService) {
    this.prodService.get().subscribe(prodx => {
      this.newproduct = prodx;
      this.route.queryParamMap.subscribe(params => {
        this.categroy = params.get('category')
        this.Filterproduct = (this.categroy) ?
          this.newproduct.filter(p => p.payload.val().cats === this.categroy) : this.newproduct;
      });
    });
    console.log (this.Filterproduct)
    this.cats = catser.getcats();
  }
 
  async ngOnInit(){
  
  }



}
