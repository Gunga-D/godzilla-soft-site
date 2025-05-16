"use client"
 
import React, { FC, createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';
import { User } from '../api/user/types';
import { userApi } from '../api/user/api';
import { useCookies } from 'next-client-cookies';

type UserContextValue = {
    user: User | null;
    accessToken: string | null;
    isLoading: boolean
};

const initialUser: UserContextValue = {
    user: null,
    accessToken: null,
    isLoading: true
};

const UserContext = createContext<UserContextValue>(initialUser);

type Props = {
    children: React.ReactNode;
}

export const UserProvider: FC<Props> = ({ children }) => {
    const cookies = useCookies();

    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useLayoutEffect(() => {
        const accessToken = cookies.get("access_token")
        if (accessToken) {
            setAccessToken(accessToken)

            const fetchUserData = async () => {
                try {
                    const data = await userApi.profile(accessToken);
                    if (data) {
                        setUser(data.data);
                    }
                } catch (e) {
                } finally {
                    setIsLoading(false)
                }
            };
            fetchUserData().catch();
        } else {
            setIsLoading(false)
        }
        return undefined;
    }, []);

    return (<UserContext.Provider value={{ user, isLoading, accessToken }}>{children}</UserContext.Provider>);
};

export function useUser(): UserContextValue {
    return useContext(UserContext);
}
