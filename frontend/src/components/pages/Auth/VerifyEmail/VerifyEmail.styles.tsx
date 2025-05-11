import styled, { keyframes } from 'styled-components';

export const VerifyEmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 1rem;
`;

export const VerifyEmailCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

export const Message = styled.p<{ success?: boolean; error?: boolean }>`
  color: ${props => {
    if (props.success) return '#28a745';
    if (props.error) return '#dc3545';
    return '#666';
  }};
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export const Button = styled.button`
  background-color: #4a90e2;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357abd;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  margin: 0 auto 1rem;
  animation: ${spin} 1s linear infinite;
`; 