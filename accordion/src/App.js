import {useState} from 'react';
import './App.css';
import {data} from './data';
import Accordion from './Accordion';


function App() {
  const [multiple, setMultiple] = useState(true);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const setIdOfAccordion = (id) => {
    setOpenAccordionId(multiple ? null : id)
  }

  const handleMultple = () =>{
    if(multiple) {
      setOpenAccordionId(-1);
    }
    setMultiple(!multiple);
  }

  return (
    <div className="App">
      <div className='multiple_check'>
        <label>Is multiple accordion allowed ? </label>
        <input type='checkbox' onChange={() => handleMultple()} checked={multiple} />
      </div>
      {/* Accordion */}    
      {data.map((qn) => {
        return <Accordion {...qn} setIdOfAccordion={setIdOfAccordion} openAccordionId={openAccordionId}/>
      })}
    </div>
  );
}

export default App;
