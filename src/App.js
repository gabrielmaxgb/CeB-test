import { useEffect, useState } from 'react';
import './App.css';
import { Container } from './AppStyles';
import Name from './Name/Name';

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

  const sortByLastName = (nameList, sort) => {
    const sortedNameList = nameList.sort((prevEl, el) => {
      if(prevEl.last_name < el.last_name) {
        return sort === "desc" ? 1 : -1;
      } else if (prevEl.last_name === el.last_name) {
        return 0;
      } else 
      return sort === "desc" ? -1 : 1;
    })

    return sortedNameList;
  };

  useEffect(() => {
    setSortedList(sortByLastName(NAME_LIST, "desc"));
  },
  [NAME_LIST]);

  console.log("sortedList");
  console.log(sortedList);

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
