import {useState} from 'react';
import "./ListMenu.css"

function ListMenu({options, label}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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