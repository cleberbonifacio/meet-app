import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1.5rem;

  border-radius: 4px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    div {
      width: 100%;
      height: 300px;
      max-height: 300px;
      background: rgba(0, 0, 0, 0.3);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      strong {
        color: rgba(255, 255, 255, 0.3);
        font-size: 20px;
      }

      svg {
        align-self: center;
      }

      &:hover {
        opacity: 0.7;
      }
    }

    img {
      width: 100%;
      max-height: 300px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }

  span {
    color: #f94d6a;
    align-self: flex-start;
    margin: 0 0 10px 3px;
  }
`;
