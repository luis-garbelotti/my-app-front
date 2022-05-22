import styled from 'styled-components';

interface Props {
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
}

export default function AddInput({ name, value, onChange, type }: Props) {
  return (
    <Input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
}

const Input = styled.input`
  
  width: 100%;
  height: 5vh;
  padding: 0 15px;
  border-radius: 5px;
  border: none;
  margin: 0 0 10px 0;
  
  background-color: #343434;
  color: #fff;

  :focus {
    outline: 2px solid #BF0000;
  }

`;