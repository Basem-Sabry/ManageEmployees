
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CategoriesService } from '../services/categories.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  date :Date=new Date();
  counterx=0;
  newproduct: any[] = [];
  Filterproduct: any[] = [];
  categroy = '';
  cats;

  constructor( private catserx: CategoriesService,private route: ActivatedRoute,
    private prodService: ProductService,private translate: TranslateService ) {
    translate.setDefaultLang('en');

    this.prodService.get().subscribe(prodx => {
      this.newproduct = prodx;
      this.route.queryParamMap.subscribe(params => {
        this.categroy = params.get('category')
        this.Filterproduct = (this.categroy) ?
          this.newproduct.filter(p => p.payload.val().cats === this.categroy) : this.newproduct;
      });
    });
    this.cats = catserx.getcats();

   }
   ChangeLangEnglish(){
    this.translate.setDefaultLang('en');

  }
  ChangeLangArabic(){
    this.translate.setDefaultLang('ar');

  }

async ngOnInit (){

}


}
