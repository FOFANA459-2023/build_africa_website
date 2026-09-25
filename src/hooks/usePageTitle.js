import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | Build Africa` : 'Build Africa';
  }, [title]);
};

export default usePageTitle;
