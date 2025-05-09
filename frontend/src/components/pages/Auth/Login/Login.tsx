import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  LoginContainer,
  LoginCard,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  RegisterLink
} from './Login.styles';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8080/api/auth/login', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Giriş işlemi başarısız oldu');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Giriş Yap</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">E-posta</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Şifre</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
          </Button>

          <RegisterLink>
            Hesabınız yok mu?{' '}
            <span onClick={() => navigate('/register')}>Kayıt Ol</span>
          </RegisterLink>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login; 