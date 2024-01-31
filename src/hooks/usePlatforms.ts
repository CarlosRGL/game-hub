import platforms from '../data/platforms';
import { useQuery } from '@tanstack/react-query';

import apiClient from '../services/api-client';
import { FetchResponse } from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms')
        .then((response) => response.data),
    staleTime: Infinity,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
