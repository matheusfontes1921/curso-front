import { useState } from 'react';
import {NavigateFunction, useNavigate} from 'react-router-dom';
import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errorStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, {
    connectionAPIPost,
    MethodType,
} from '../functions/connection/connectionAPI';
import { useGlobalContext } from '../useGlobalContext';
import {FirstScreenRoutesEnum} from "../../modules/firstScreen/routes";
import {useGlobalReducer} from "../../store/reducers/globalReducer/useGlobalReducer";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const useRequests = () => {
    const [loading, setLoading] = useState(false);
    const { setNotification, setUser } = useGlobalReducer();

    const request = async <T>(
        url: string,
        method: MethodType,
        saveGlobal?: (object: T) => void,
        body?: unknown,
        message?: string,
    ): Promise<T | undefined> => {
        setLoading(true);

        const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
            .then((result) => {
                if (saveGlobal) {
                    saveGlobal(result);
                }
                if(message) {
                    setNotification("Sucesso!","success",message);
                }
                return result;
            })
            .catch((error: Error) => {
                setNotification(error.message, 'error');
                return undefined;
            });

        setLoading(false);

        return returnObject;
    };

    const authRequest = async (navigate: NavigateFunction, body: unknown): Promise<void> => {
        setLoading(true);

        await connectionAPIPost<AuthType>(URL_AUTH, body)
            .then((result) => {
                setUser(result.user);
                setAuthorizationToken(result.accessToken);
                navigate(FirstScreenRoutesEnum.FIRST_SCREEN)
                return result;
            })
            .catch(() => {
                setNotification(ERROR_INVALID_PASSWORD, 'error');
                return undefined;
            });

        setLoading(false);
    };

    return {
        loading,
        authRequest,
        request,
    };
};

