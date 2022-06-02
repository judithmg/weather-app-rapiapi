import { ChangeEvent } from 'react';
import { IoSearch } from 'react-icons/io5';
import * as Colors from 'src/constants/colors';
import styled from 'styled-components';

interface Props {
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputStyled = styled.div`
  position: relative;
  input {
    background-color: ${Colors.black};
    width: 350px;
    color: ${Colors.white};
    border: 2px solid ${Colors.white};
    box-shadow: 2px 2px ${Colors.white};
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
    outline: none;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${Colors.white};
      font-size: 16px;
    }

    &:focus {
      background-color: ${Colors.white};
      color: ${Colors.black};
      border: 2px solid ${Colors.lightgray};
      box-shadow: 2px 2px ${Colors.lightgray};
    }
  }
  svg {
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 10px;
    color: ${Colors.white};
    transition: all 0.2s ease-in-out;
  }
  input:focus + svg {
    color: ${Colors.lightgray};
  }
`;

const Input: React.FC<Props> = ({ placeholder, handleChange }) => {
  return (
    <InputStyled>
      <input placeholder={placeholder} onChange={handleChange} />
      <IoSearch size={24} />
    </InputStyled>
  );
};

export default Input;
