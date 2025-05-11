import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {
  VerifyEmailContainer,
  VerifyEmailCard,
  Title,
  Message,
  Button,
  LoadingSpinner
} from './VerifyEmail.styles';

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = searchParams.get('token');
        console.log('Doğrulama token\'ı:', token);

        if (!token) {
          setStatus('error');
          setMessage('Geçersiz doğrulama bağlantısı: Token bulunamadı');
          return;
        }

        const response = await axios.get(`http://localhost:8080/api/auth/verify-email?token=${token}`);
        console.log('Sunucu yanıtı:', response.data);
        
        // Başarılı yanıt
        setStatus('success');
        setMessage(response.data.message);
      } catch (error: any) {
        console.error('Doğrulama hatası:', error);
        
        // Backend'den gelen hata mesajını kontrol et
        const errorMessage = error.response?.data?.message;
        if (errorMessage && errorMessage.includes('zaten doğrulanmış')) {
          setStatus('success');
          setMessage(errorMessage);
        } else {
          setStatus('error');
          setMessage(errorMessage || 'E-posta doğrulama işlemi başarısız oldu');
        }
      }
    };

    verifyEmail();
  }, [searchParams]);

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <VerifyEmailContainer>
      <VerifyEmailCard>
        <Title>E-posta Doğrulama</Title>
        {status === 'loading' && (
          <>
            <LoadingSpinner />
            <Message>E-posta adresiniz doğrulanıyor...</Message>
          </>
        )}
        {status === 'success' && (
          <>
            <Message success>{message}</Message>
            <Button onClick={handleLogin}>Giriş Yap</Button>
          </>
        )}
        {status === 'error' && (
          <>
            <Message error>{message}</Message>
            <Button onClick={handleLogin}>Giriş Sayfasına Dön</Button>
          </>
        )}
      </VerifyEmailCard>
    </VerifyEmailContainer>
  );
};

export default VerifyEmail; 