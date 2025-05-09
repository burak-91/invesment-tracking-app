import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: white;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserName = styled.span`
  font-weight: 500;
  color: #1a1a1a;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #2563eb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
`; 