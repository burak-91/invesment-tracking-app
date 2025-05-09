import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  Logo,
  NavList,
  NavItem,
  NavLinkStyled,
  LogoutButton
} from './Sidebar.styles';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/investments', label: 'Yatırımlarım', icon: '💰' },
    { path: '/add-investment', label: 'Yatırım Ekle', icon: '➕' },
    { path: '/prices', label: 'Fiyatlar', icon: '📈' },
    { path: '/reports', label: 'Raporlar', icon: '📑' },
    { path: '/profile', label: 'Profil', icon: '👤' },
    { path: '/settings', label: 'Ayarlar', icon: '⚙️' }
  ];

  return (
    <SidebarContainer>
      <Logo>Yatırım Takip</Logo>
      <NavList>
        {menuItems.map((item) => (
          <NavItem key={item.path}>
            <NavLinkStyled to={item.path}>
              <span>{item.icon}</span>
              {item.label}
            </NavLinkStyled>
          </NavItem>
        ))}
      </NavList>
      <LogoutButton onClick={handleLogout}>
        <span>🚪</span>
        Çıkış Yap
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar; 