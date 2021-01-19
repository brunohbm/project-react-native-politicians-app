import {useEffect, useState, useMemo} from 'react';

import Axios from 'axios';

const {CancelToken} = Axios;

const useAxios = (axiosOptions) => {
  const [options] = useState(axiosOptions);
  const source = useMemo(() => CancelToken.source(), []);

  const axiosInstance = useMemo(() => {
    return Axios.create({
      ...options,
      baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
      cancelToken: source.token,
    });
  }, [source, options]);

  useEffect(() => {
    return () => {
      source.cancel('Operação cancelada, devido a destruição do componente');
    };
  }, [source]);

  return axiosInstance;
};

export default useAxios;
