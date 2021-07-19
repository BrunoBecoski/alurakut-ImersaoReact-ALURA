import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex: 1; 
  align-items: center;
  justify-content: center;

  .loginScreen {
    padding: 16px;
    max-width: 1110px;
    display: grid;
    --gap: 12px;
    --gutter: 16px;
    grid-gap: var(--gap);
    grid-template-areas: 
      "logoArea"
      "formArea"
      "footerArea";

    @media(min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 
        "logoArea formArea"
        "logoArea formArea"
        "footerArea footerArea";
    }

    .logoArea {
      grid-area: logoArea;
      background-color: var(--backgroundTertiary);
      border-radius: var(--commonRadius);
      padding: var(--gutter);
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 263px;

      @media(min-width: 860px) {
        min-height: 368px;
      }

      p {
        font-size: 12px;
        line-height: 1.2;

        &:not(:last-child) {
          margin-bottom: 12px;
        }

        strong {
          color: var(--colorQuarternary);
        }
      }

      img {
        max-height: 45px;
        margin-bottom: 36px;
      }
    }
    
    .footerArea {
      grid-area: footerArea;
      background-color: var(--backgroundQuarternary);
      border-radius: var(--commonRadius);
      padding: 8px;

      p {
        font-size: 12px;
        text-align: center;
        
        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
      }
    }
  }
`;