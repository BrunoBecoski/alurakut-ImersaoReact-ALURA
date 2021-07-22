import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 32px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    font-size: 12px;
    color: #5A5A5A;
    display: grid;
    grid-template-areas:
      "title title"
      "number number"; 
    
    &:not(:last-child) {
      margin-right: 5px;
    }

    .OrkutIconSet__title {
      display: block;
      font-style: italic; 
    }

    .OrkutIconSet__number {
      min-width: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .OrkutIconSet__iconSample {
        margin-right: 7px;
      }
    }
  }
`;