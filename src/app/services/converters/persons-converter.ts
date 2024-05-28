import {
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from '@angular/fire/firestore';
import { Person } from '../../shared/model/person';
import { PhoneNumber } from '../../shared/model/phone-number';
import { PhoneType } from '../../shared/model/phone-type';

export const personConverter = {
  toFirestore: (person: Person) => {
    const phones = [];

    for (let i = 0; i < person.phones.length; ++i) {
      phones.push({
        number: person.phones[i].number,
      });
    }

    return {
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      age: person.age,
      phones: phones,
      birthday : person.birthday ? Timestamp.fromDate(new Date(person.birthday!)) : undefined
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);

    const phones = data['phones'];
    const person = new Person(
      snapshot.id,
      data['firstName'],
      data['lastName'],
      data['email'],
      data['age'],
    );

    if (data['birthday']) {
      person.birthday = data['birthday'].toDate();
    }

    if (phones) {
      for (let i = 0; i < phones.length; ++i) {
        person.phones.push(new PhoneNumber(phones[i].number, PhoneType.Mobile));
      }
    }

    return person;
  },
};