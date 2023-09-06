import styled from 'styled-components';

const ContactListStyled = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 0;
  }

  li {
    margin-top: 10px;
    display: flex;
    font-size: 24px;
    align-items: center;
  }

  button {
    margin-left: 10px;
    padding: 4px 8px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #c82333;
  }
`;

export default ContactListStyled;
