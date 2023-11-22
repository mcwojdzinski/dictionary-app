import { Input, Label, Switch } from './ToggleSwitch.styles.tsx';
import { useEffect, useState } from 'react';
import IconMoon from '../../Icons/IconMoon.tsx';

const ToggleSwitch = ({ toggleTheme, theme }: { toggleTheme: () => unknown; theme: string }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    theme === 'dark' ? setChecked(true) : setChecked(false);
  }, [theme]);
  const changeTheme = () => {
    toggleTheme();
    setChecked(!checked);
  };

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={changeTheme} />
      <Switch />
      <IconMoon isChecked={checked} />
    </Label>
  );
};

export default ToggleSwitch;
