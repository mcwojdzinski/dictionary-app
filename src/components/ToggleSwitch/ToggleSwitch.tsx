import { Input, Label, Switch } from './ToggleSwitch.styles.tsx';
import { useState } from 'react';
import IconMoon from '../Icons/IconMoon.tsx';

const ToggleSwitch = ({ toggleTheme }: { toggleTheme: () => unknown }) => {
  const [checked, setChecked] = useState(false);

  const changeTheme = () => {
    toggleTheme();
    setChecked(!checked);
  };

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={changeTheme} />
      <Switch />
      <IconMoon />
    </Label>
  );
};

export default ToggleSwitch;
