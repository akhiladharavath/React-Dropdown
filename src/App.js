import { DropdownButton,Dropdown } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const handleSelect = (eventKey) =>{
    alert(`Selected : ${eventKey}`);
  }
  return (
    <div className="App">
     <DropdownButton
     id = "dropdown-button"
     title = "Dropdown Button"
     className='custom-dropdown'
     onSelect={handleSelect}
     >
      <Dropdown.Item className="custom-item" eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item className="custom-item" eventKey="2"> Another Action</Dropdown.Item>
      <Dropdown.Item className="custom-item" eventKey="3">Something Action</Dropdown.Item>

     </DropdownButton>
    </div>
  );
}

export default App;
