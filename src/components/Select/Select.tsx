import { useState } from 'react';
import {
  DropdownItem,
  DropdownStyle,
  SelectContainer,
  SelectIconWrapper,
  SelectLabelButton,
} from './Select.styles.tsx';
import IconArrowDown from '../Icons/IconArrowDown.tsx';

const Select = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState('');
  const [currentLabel, setCurrentLabel] = useState<string>('');

  const handleChange = (font: { label: string; value: string }) => {
    setCurrentValue(font.value);
    setCurrentLabel(font.label);
    document.documentElement.style.setProperty('--main-font', font.value);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const fontOptions = [
    { label: 'Inter', value: "'Inter', sans-serif" },
    { label: 'Serif', value: "'Lora', serif" },
    { label: 'Mono', value: "'Inconsolata', monospace" },
  ];

  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        {currentLabel !== '' ? currentLabel : 'Choose a font'}
        <SelectIconWrapper>
          <IconArrowDown />
        </SelectIconWrapper>
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {fontOptions.map((font, index) => (
          <DropdownItem onClick={() => handleChange(font)} active={font.value === currentValue} key={index}>
            {font.label}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};

export default Select;
