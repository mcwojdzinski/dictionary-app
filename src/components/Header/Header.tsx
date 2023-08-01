import IconLogo from '../Icons/IconLogo.tsx';

import { HeaderDivider, HeaderSettings, HeaderWrapper } from './Header.styles.tsx';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.tsx';
import Select from '../Select/Select.tsx';

const Header = ({ toggleTheme }: { toggleTheme: () => unknown }) => {
  return (
    <HeaderWrapper>
      <IconLogo />
      <HeaderSettings>
        <Select />
        <HeaderDivider />
        <ToggleSwitch toggleTheme={toggleTheme} />
      </HeaderSettings>
    </HeaderWrapper>
  );
};

export default Header;
