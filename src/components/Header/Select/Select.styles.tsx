import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectLabelButton = styled.button`
  padding: 0.3rem 0.5rem;
  min-width: 7rem;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.textPrimary};
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s ease;
`;

export const DropdownStyle = styled.div<{ isVisible: boolean }>`
  position: absolute;
  z-index: 999;
  top: 50px;
  left: 0;
  min-width: 10rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0px 5px 30px 0px ${(props) => props.theme.accentColorPrimary};
  background: ${(props) => props.theme.bgSecondary};
  transition: max-height 0.2s ease;
  max-height: ${(props) => (props.isVisible ? '40vmax' : '40px')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const DropdownItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  cursor: pointer;
  color: ${(props) => props.theme.textPrimary};
  font-weight: ${(props) => (props.active ? 700 : 500)};

  &:hover,
  :focus,
  :focus:hover {
    color: ${(props) => props.theme.accentColorPrimary};
    outline: none;
  }
`;

export const SelectIconWrapper = styled.span`
  padding: 5px 10px;
`;
