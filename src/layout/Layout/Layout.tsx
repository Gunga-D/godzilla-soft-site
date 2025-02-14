import React, { ReactNode } from 'react';
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styled from "styled-components";

type LayoutProps = {
    children: ReactNode,
    pageId?: string,
}

export const Layout = (props: LayoutProps) => {
    return (
        <StyledLayout>
            <Header activePage={props.pageId} />
            <StyledContent>
                {props.children}
            </StyledContent>
            <Footer />
        </StyledLayout>
    );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const StyledContent = styled.div`
  flex-grow: 1; 
`;
