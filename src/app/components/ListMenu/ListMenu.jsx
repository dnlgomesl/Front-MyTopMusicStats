import {useState, useContext, useEffect} from 'react';
import TypeContext from '../../contexts/Type';
import RangeContext from '../../contexts/Range';
import LimitContext from '../../contexts/Limit';
import OrderContext from '../../contexts/Order';

import "./ListMenu.css"

function ListMenu({options, label}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const {range, setRange} = useContext(RangeContext);
  const {limit, setLimit} = useContext(LimitContext);
  const {type, setType} = useContext(TypeContext);
  const {order, setOrder} = useContext(OrderContext);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (label == 'Intervalo de tempo'){
      setRange(option)
    }
    if (label == 'Quantidade de item'){
      setLimit(option)
    }
    if (label == 'Tipo do item'){
      setType(option)
    }
    if (label == 'Tipo de ordenação'){
      setOrder(option)
    }
    setIsOpen(false);
  };

  return (
    <div className="toggle-menu" onClick={toggleMenu}>
      <div className="toggle-header" >
        {selectedOption || label}
      </div>
      {isOpen && (
        <div className="toggle-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="toggle-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListMenu;