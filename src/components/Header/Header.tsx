import IconLogo from '../Icons/IconLogo.tsx';

import { HeaderWrapper } from './Header.styles.tsx';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.tsx';

const Header = ({ toggleTheme }: { toggleTheme: () => unknown }) => {
  return (
    <HeaderWrapper>
      <IconLogo />
      <select>
        <option>XD</option>
      </select>
      <ToggleSwitch toggleTheme={toggleTheme} />
    </HeaderWrapper>
  );
};

export default Header;
