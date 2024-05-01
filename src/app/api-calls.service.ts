import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  constructor(private db: AngularFirestore) {}
  getAll(collectionName: string) {
    return this.getCollectRef(collectionName).valueChanges();
  }
  getAllSnapshots(collectionName: string) {
    return this.getCollectRef(collectionName).snapshotChanges();
  }
  getAllSnapshotsFormated(collectionName: string) {
    return this.getCollectRef(collectionName).snapshotChanges().pipe(
      map(changes =>
        changes.map((c:any) =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
  }
  addItem(collectionName: string, payload: any) {
    return this.getCollectRef(collectionName).add({ ...payload });
  }
  updateItem(collectionName: string, payload: any, id: string) {
    return this.getCollectRef(collectionName).doc(id).set(payload);
  }
  updateOnlyFileds(collectionName: string, payload: any, id: string) {
    return this.getCollectRef(collectionName).doc(id).update(payload);
  }
  deleteItem(collectionName: string, id: string) {
    return this.getCollectRef(collectionName).doc(id).delete();
  }

  private getCollectRef(collectionName: string) {
    return this.db.collection(collectionName);
  }
}
