import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex:
  flex-direction: column;

  header{
    strong {
      color: #fff;
      font-size: 32px;
    }

    a {
      float: right;
      width: 169px;
      height: 44px;
      background: #f94d6a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }
    }
    svg {
      margin-right: 8px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Meet = styled.li`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  transition: all 0.2s ease 0s;

  & + li {
    margin-top: 8px;
  }

  a {
    display: flex;
    flex: 1;
    padding: 20px;
    justify-content: space-between;

    aside {
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        color: #fff;
        font-size: 19px;
        font-weight: normal;
      }
    }

    > div {
      display: flex;
      align-items: center;

      span {
        font-size: 15px;
        color: #999;
        margin-right: 20px;
      }
    }
  }

  ${props =>
    !props.toggle &&
    css`
      &:hover {
        background: rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
      }
    `}
`;
