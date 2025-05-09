import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  RegisterContainer,
  RegisterCard,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  LoginLink,
  PasswordRequirements,
  RequirementItem
} from './Register.styles';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [passwordChecks, setPasswordChecks] = useState({
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const checkPasswordRequirements = (password: string) => {
    setPasswordChecks({
      hasMinLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      checkPasswordRequirements(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Şifreler eşleşmiyor');
      return;
    }

    if (!Object.values(passwordChecks).every(check => check)) {
      setError('Lütfen tüm şifre gereksinimlerini karşılayın');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Kayıt işlemi başarısız oldu');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <Title>Kayıt Ol</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Ad Soyad</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

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
            <PasswordRequirements>
              <RequirementItem isMet={passwordChecks.hasMinLength}>
                En az 8 karakter
              </RequirementItem>
              <RequirementItem isMet={passwordChecks.hasUpperCase}>
                En az 1 büyük harf
              </RequirementItem>
              <RequirementItem isMet={passwordChecks.hasLowerCase}>
                En az 1 küçük harf
              </RequirementItem>
              <RequirementItem isMet={passwordChecks.hasNumber}>
                En az 1 rakam
              </RequirementItem>
              <RequirementItem isMet={passwordChecks.hasSpecialChar}>
                En az 1 özel karakter
              </RequirementItem>
            </PasswordRequirements>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Şifre Tekrar</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
          </Button>

          <LoginLink>
            Zaten hesabınız var mı?{' '}
            <span onClick={() => navigate('/login')}>Giriş Yap</span>
          </LoginLink>
        </Form>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register; 