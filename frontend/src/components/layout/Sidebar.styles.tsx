import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #333;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  span {
    margin-right: 0.75rem;
  }

  &:hover {
    background-color: #333;
  }

  &.active {
    background-color: #2563eb;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #dc2626;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  span {
    margin-right: 0.75rem;
  }

  &:hover {
    background-color: #b91c1c;
  }
`; 