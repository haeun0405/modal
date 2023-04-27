import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';

export const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0;
  width: ${({ size }) => (size === 'large' ? '200px' : size === 'medium' ? '130px' : '100px')};
  height: ${({ size }) => (size === 'large' ? '50px' : size === 'medium' ? '45px' : '40px')};
  background-color: ${({ size, variant }) => {
    if (variant === 'negative' || size === 'large') return 'transparent';
    return 'rgb(85, 239, 196)';
  }};
  color: ${({ color }) => color || 'black'};
  border: ${({ size, variant }) =>
    size === 'large' || variant === 'negative' ? `2px solid ${variant === 'negative' ? 'rgb(250, 177, 160)' : 'rgb(85, 239, 196)'}` : 'none'};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Icon = styled(FiCheck)`
  margin-right: 4px;
  color: inherit; // 아이콘 색상을 버튼의 글씨 색상과 동일하게 설정
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;