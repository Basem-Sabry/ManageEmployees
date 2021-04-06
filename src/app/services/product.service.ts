import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db : AngularFireDatabase) { }
  create(product){
    this.db.list('/product').push(product);
  }
  
  get(){
    return this.db.list('/product').snapshotChanges();
  }
  getbyID(productid:string){
    return this.db.object('/product/' + productid).snapshotChanges();

  }
  getbyIDx(productid:string){
    return this.db.object('/product/' + productid).valueChanges();

  }
  Delete( productid : string ){
    return this.db.object('/product/' + productid).remove();
  
  }
  update( productid:string ,product){
  return this.db.object('/product/' + productid).update(product);

}

}