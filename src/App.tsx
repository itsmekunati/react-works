import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

{
  /*const cities = ["Hyderabad", "Glasgow", "London", "Athens", "Paris"];
const heading = "Cities";


const handleSelctItem = (city: string) => {
  console.log(city);
  
}; */
}
const text = "Abhishek";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Abhishek </Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        Here
      </Button>
      {/*} <ListGroup
        cities={cities}
        heading={heading}
        onSelectItem={handleSelctItem}
  /> */}
    </div>
  );
}

export default App;
