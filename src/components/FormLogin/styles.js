import styled from 'styled-components';

export const Section = styled.section`
  grid-area: formArea;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--gutter);
    padding-left: 50px;
    padding-right: 50px;
    background-color: var(--backgroundSecondary);
    border-radius: var(--commonRadius);
    flex: 1;

    &:not(:last-child) {
      margin-bottom: var(--gap);
    }

    &:first-child {
      min-height: 224px;
      
      @media(min-width: 860px) {
        min-height: 282px;
      }
    }

    p {
      font-size: 14px;
    }

    a {
      text-decoration: none;
      color: var(--colorPrimary);
    }

    input {
      width: 100%;
      display: block;
      border: 1px solid var(--textQuarternaryColor);
      padding: 12px;
      background-color: var(--backgroundTertiary);
      border-radius: var(--commonRadius);
      margin-top: 24px;
      margin-bottom: 16px;
    }
    
    button {
      width: 110%;
      display: block;
      border: 0;
      padding: 12px;
      border-radius: var(--commonRadius);
      background-color: var(--colorPrimary);
      color: var(--textSecondaryColor);
    }
  }
`;