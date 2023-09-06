import styled from 'styled-components';

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default ContactFormStyled;
