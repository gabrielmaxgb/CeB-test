import { useEffect, useState } from 'react';
import './App.css';
import { Container } from './AppStyles';
import Name from './Name/Name';
import { sortByLastName } from './utils';

const NAME_LIST = [
  {
    name: "Albert",
    last_name: "Einstein",
    timeout: 10
  },
  {
    name: "Elon",
    last_name: "Musk",
    timeout: 15
  },
  {
    name: "Erwin",
    last_name: "Schrödinger",
    timeout: 12
  },
  {
    name: "Isaac",
    last_name: "Newton",
    timeout: 18
  },
  {
    name: "Nikola",
    last_name: "Tesla",
    timeout: 20
    },
  {
    name: "Marie",
    last_name: "Curie",
    timeout: 14
  },
  {
    name: "Werner",
    last_name: "Heisenberg",
    timeout: 16
  },
  {
    name: "Niels",
    last_name: "Bohr",
    timeout: 19
  },
  {
    name: "Robert",
    last_name: "Oppenheimer",
    timeout: 20
  },
];

function App() {
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    setSortedList(sortByLastName(NAME_LIST, "desc"));
  },
  []);

  const renderNames = (list) => {
    return list.map(name => {
      return (
        <Name name={name} />
      );
    });

  };

  return (
    <Container>
      {renderNames(sortedList)}
    </Container>
  );
}

export default App;
