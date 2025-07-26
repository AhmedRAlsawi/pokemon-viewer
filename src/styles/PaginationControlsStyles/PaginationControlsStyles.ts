import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};

  .pagination {
    display: flex;
    gap: ${({ theme }) => theme.spacing.xs};
    list-style: none;
    padding: 0;
  }

  .pagination li {
    padding: ${({ theme }) => theme.spacing.xs}
      ${({ theme }) => theme.spacing.sm};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.sm};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.cardBackground};
    transition: all 0.2s;
  }

  .pagination li.active {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }

  .pagination li:hover:not(.active) {
    background-color: ${({ theme }) => theme.shadows.hover};
  }
    
  .pagination li.disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  }
`;

export const InfoMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
