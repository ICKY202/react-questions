import {useEffect, useState} from 'react';

const Accordion = ({id, title, info, openAccordionId, setIdOfAccordion}) => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
        setIdOfAccordion(id);
    }

    useEffect(() => {
        setShow(openAccordionId === id);
    }, [id, openAccordionId]);
    return (
        <div className="accordion_container">
            <div>
                <h4>{title}</h4>
                <button onClick={() => toggle()}>{show ? " - " : " + "}</button>    
            </div>
            {show && <p>{info}</p>}
        </div>
    );
}

export default Accordion;