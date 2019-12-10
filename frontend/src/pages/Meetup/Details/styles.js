import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      color: #fff;
      font-size: 26px;
      font-weight: 400;
    }

    aside {
      display: flex;

      button {
        color: #fff;
        background-color: #d44059;
        padding: 0 16px;
        border-radius: 4px;
        border: none;
        align-items: center;
        justify-content: center;
        svg {
          margin-right: 6px;
          vertical-align: middle;
        }
      }

      a {
        display: flex;
        align-items: center;
        color: #fff;
        background-color: #3b9eff;
        padding: 0 16px;
        margin-right: 20px;
        border-radius: 4px;

        svg {
          margin-right: 6px;
          vertical-align: middle;
        }
      }
    }
  }

  main {
    margin: 40px 0 20px;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    article {
      color: #fff;
      margin-top: 20px;

      p {
        line-height: 24px;
        margin-bottom: 14px;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 40px;

    span {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.75rem;
      margin-right: 10px;

      svg {
        margin-right: 5px;
        vertical-align: middle;
      }
    }

    address {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.75rem;
      font-style: normal;

      svg {
        margin-right: 5px;
        vertical-align: middle;
      }
    }
  }
`;
