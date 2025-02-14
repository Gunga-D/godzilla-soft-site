import styled from 'styled-components';

export const Skeleton = () => {
    return (
        <StyledSkeleton>
            <SkeletonImage />
            <SkeletonTextWrapper>
                <SkeletonLine width="80%" />
                <SkeletonLine width="60%" />
                <SkeletonLine width="40%" />
                <SkeletonLine width="70%" />
                <SkeletonLine width="50%" />
            </SkeletonTextWrapper>
        </StyledSkeleton>
    );
};

const StyledSkeleton = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;

const SkeletonImage = styled.div`
  width: 481px;
  height: 481px;
  border-radius: 10px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

const SkeletonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
`;

const SkeletonLine = styled.div<{ width: string }>`
  height: 20px;
  width: ${({ width }) => width};
  border-radius: 5px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.6;
    }
  }
`;
