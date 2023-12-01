import { Input, Label, Switch } from './ToggleSwitch.styles';
import { useEffect, useState } from 'react';
import IconMoon from '../../Icons/IconMoon';

const ToggleSwitch = ({ toggleTheme, theme }: { toggleTheme: () => void; theme: string }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    theme === 'dark' ? setChecked(true) : setChecked(false);
  }, [theme]);
  const changeTheme = () => {
    toggleTheme();
    setChecked((prev) => !prev);
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
