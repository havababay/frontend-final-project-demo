import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';
import {
  DocumentSnapshot,
  Firestore,
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from '@angular/fire/firestore';
import { personConverter } from './converters/persons-converter';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  constructor(private firestoreService: Firestore) {}

  async list(): Promise<Person[]> {
    const collectionConnection = collection(
      this.firestoreService,
      'people'
    ).withConverter(personConverter);

    const querySnapshot: QuerySnapshot<Person> = await getDocs(
      collectionConnection
    );

    const result: Person[] = [];

    querySnapshot.docs.forEach((docSnap: DocumentSnapshot<Person>) => {
      const data = docSnap.data();
      if (data) {
        result.push(data);
      }
    });

    return result;
  }

  async get(id: string): Promise<Person | undefined> {
    const personDocRef = doc(this.firestoreService, 'people', id).withConverter(
      personConverter
    );
    return (await getDoc(personDocRef)).data();
  }

  async add(newPersonData: Person) {
    await addDoc(
      collection(this.firestoreService, 'people').withConverter(
        personConverter
      ),
      newPersonData
    );
  }

  async update(existingPerson: Person): Promise<void> {
    const personDocRef = doc(
      this.firestoreService,
      'people',
      existingPerson.id
    ).withConverter(personConverter);
    return setDoc(personDocRef, existingPerson);
  }

  async delete(existingPersonId: string) {
    const personDocRef = doc(
      this.firestoreService,
      'people',
      existingPersonId
    ).withConverter(personConverter);
    return deleteDoc(personDocRef);
  }
}
