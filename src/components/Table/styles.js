import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: auto;
  padding: 1.25rem;

`;


export const StyledTable = styled.table`
  width: 100% !important;
  text-align: left;
  border-spacing: 0 10px;
  border-collapse: separate;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  > thead {
    > tr {
      > th {
        white-space: nowrap;
        border-bottom-width: 20px;

        font-weight: 500;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;

        &:first-child {
          display: none;
      }

      }

      > td {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;

        border-bottom-width: 1px;
      }
    }
  }
    
  
  > tbody {
    background-color: #edf2f7;

    > tr {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;

      &:nth-child(even) {
        background-color: #fafafa;
      }

      > td {
          &:first-child {
            display: none;
        }
      }

    }

    
  }
  
`;
