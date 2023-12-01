import IconLogo from '../Icons/IconLogo';

import { HeaderDivider, HeaderSettings, HeaderWrapper } from './Header.styles';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import Select from './Select/Select';

const Header = ({ toggleTheme, theme }: { toggleTheme: () => unknown; theme: string }) => {
  return (
    <HeaderWrapper>
      <IconLogo />
      <HeaderSettings>
        <Select />
        <HeaderDivider />
        <ToggleSwitch toggleTheme={toggleTheme} theme={theme} />
      </HeaderSettings>
    </HeaderWrapper>
  );
};

export default Header;
