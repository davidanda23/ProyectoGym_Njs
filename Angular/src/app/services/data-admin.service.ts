import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { InscritosInterface } from '../models/inscritos';


@Injectable({
  providedIn: 'root'
})
export class DataAdminService {

  

  constructor(private afs: AngularFirestore) {
    this.subsCollection = afs.collection<InscritosInterface>('clases');
    this.subs = this.subsCollection.valueChanges();
   }

    private subsCollection: AngularFirestoreCollection<InscritosInterface>;
    private subs: Observable<InscritosInterface[]>;
    private ClaseDoc: AngularFirestoreDocument<InscritosInterface>;

  getAllsubs(){
    this.subsCollection = this.afs.collection<InscritosInterface>('clases');
    return this.subs = this.subsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as InscritosInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  addClase(clase: InscritosInterface): void {
    this.subsCollection.add(clase);
    console.log(clase.id);
  }

  deleteClase(clase: String): void {
    this.ClaseDoc = this.afs.doc<InscritosInterface>(`clases/${clase}`);
    console.log(clase);
    this.ClaseDoc.delete();
  }

  updateClase(clase: InscritosInterface):void {
    let idClase = clase.id;
    this.ClaseDoc = this.afs.doc<InscritosInterface>(`clases/${idClase}`);
    this.ClaseDoc.update(clase);
  }
}
