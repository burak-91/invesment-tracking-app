import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  UserInfo,
  UserName,
  UserAvatar
} from './TopNavbar.styles';

const NavbarContainer = styled.nav`
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

const TopNavbar: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Misafir"}');

  return (
    <NavbarContainer>
      <Logo onClick={() => navigate('/')}>Yatırım Takip</Logo>
      <UserInfo>
        <UserAvatar>
          {user?.name?.charAt(0).toUpperCase() || 'U'}
        </UserAvatar>
        <UserName>{user?.name || 'Kullanıcı'}</UserName>
      </UserInfo>
    </NavbarContainer>
  );
};

export default TopNavbar; 