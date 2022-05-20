import styled from 'styled-components';

interface Props {
  name: string,
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function AddTextArea({ name, value, onChange }: Props) {
  return (
    <TextArea
      name={name}
      value={value}
    />
  );
}

const TextArea = styled.textarea`

  width: 100%;
  max-width: 100%;
  height: 10vh;
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