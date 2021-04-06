import { take, first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core'; 
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
product : any = {};
id;
date = new FormControl(new Date());
  cats;
  constructor(private cat :CategoriesService ,private activeroute : ActivatedRoute ,private ProductServicex :ProductService,private router:Router) { 
    this.cats=cat.getcats();
    this.id = this.activeroute.snapshot.paramMap.get('id');
    
    if(this.id || this.product){
      this.ProductServicex.getbyIDx(this.id).pipe(take(1)).subscribe(prod=>{
        if(prod){
           this.product=prod ;
        }
      })

    }

  }

  ngOnInit(): void {
  } 
  save(product){
    
    if(this.id){
      this.ProductServicex.update(this.id,product);
      this.router.navigateByUrl("/");

    }else{
    
  
      this.ProductServicex.create(product);
      this.router.navigateByUrl("/");
  

    }
     

  }
  delete(){
      this.ProductServicex.Delete(this.id);

        this.router.navigateByUrl("/");

  }

}
