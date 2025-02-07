import React, {useEffect, useState} from 'react';
import {catalogApi} from "../../common/api/catalogItem/catalog-api";
import {Category} from "../../common/api/catalogItem/catalogItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true)
            try {
                const data = await catalogApi.getCategoriesTree();
                setCategories(data);
            } catch (err) {
              console.log(err)
            }
            finally {
              setIsLoading(false)
            }
        };
        fetchCategories();
    }, []);
    return (
        <StyledMenu>
            <StyledUl>
                <StyledLink to={'/catalog/category/10001'}><StyledLi>Каталог</StyledLi></StyledLink>
                <StyledLink to={`/catalog/category/10001`}><StyledLi>Игры</StyledLi></StyledLink>
                <StyledLink to={`/catalog/category/10002`}><StyledLi>Подписки</StyledLi></StyledLink>
                <StyledLink to={`/catalog/category/10004`}><StyledLi>Пополнения</StyledLi></StyledLink>
                {/*{!isLoading && categories?.map((category, index) => (*/}
                {/*    <StyledLink to={`/catalog/category/${category.id}`} key={index}><StyledLi>{category.name}</StyledLi></StyledLink>*/}
                {/*))}*/}
            </StyledUl>
        </StyledMenu>
    );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledMenu = styled.menu`
  padding-left: 48px;
  font-size: 14px;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 10px;
  font-weight: 900;
  text-decoration: none;
  list-style-type: none;
`;

type StyledLiProps = {
    isActive?: boolean;
};

const StyledLi = styled.li<StyledLiProps>`
  transition: background 0.3s ease-out, padding 0.3s ease-out, border-radius 0.3s ease-out;
  padding: 5px 11px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #FF333B;
    transition: 0.2s ease-out;
  }
`;
