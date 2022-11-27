import { useState, useEffect } from 'react';
import { isValidHttpsUrl } from '../utils';

const useReviewDetails = (uri: string): string | null => {
  const [reviewDetails, setReviewDetails] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isValidHttpsUrl(uri)) {
          throw new Error('Uri not valid: ' + uri);
        }

        const response = await fetch(uri);
        const data: string = await response.json();
        if (data) {
          setReviewDetails(data);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [uri]);

  return reviewDetails;
};

export default useReviewDetails;
