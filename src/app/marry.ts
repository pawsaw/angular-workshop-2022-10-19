interface Person {
  first: string;
  last: string;
  address: {
    city: string;
    country: string;
  };
}

const person: Person = {
  first: 'Max',
  last: 'Mustermann',
  address: {
    city: 'Hannover',
    country: 'Deutschland',
  },
};

function marry(person: Person, last: string, city: string): Person {
  return {
    ...person,
    last,
    address: {
      ...person.address,
      city,
    },
  };
}

const marriedPerson = marry(person, 'Musterfrau', 'Berlin');

function hasChanged(prevPerson: Person, currPerson: Person): boolean {
  return (
    // if n:= #nodes + #leaves, then O(n)
    // is this possible in O(1)
    prevPerson !== currPerson
    // prevPerson.first !== currPerson.first ||
    // prevPerson.last !== currPerson.last ||
    // prevPerson.address !== currPerson.address ||
    // prevPerson.address.city !== currPerson.address.city ||
    // prevPerson.address.country !== currPerson.address.country
  );
}
