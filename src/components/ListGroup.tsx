import { Fragment, MouseEvent, useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
  //const cities = ["Hyderabad", "Glasgow", "London", "Athens", "Paris"];
  //let slectedIndex = 0;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return cities.length === 0 && <p>No Cities Found</p>;
  };

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1> {heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            //onClick={() => console.log("Clicked " + city, index)}
            //onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
