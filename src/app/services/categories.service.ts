import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db : AngularFireDatabase  ) { }
  getcats(){
    return this.db.list('/cats').valueChanges();
  }
}
