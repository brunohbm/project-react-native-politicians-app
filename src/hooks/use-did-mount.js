import {useEffect} from 'react';

const useDidMount = (action) => {
  useEffect(() => {
    action();
  }, []);
};

export default useDidMount;
