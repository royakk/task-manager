import { useEffect, useState } from 'react';
import { Task } from '../interfaces';
import { useAppSelector } from '@/store/store';

type Props = {
  searchTerm: string;
};

const useSearchQuery = ({ searchTerm }: Props): Task[] => {
  const [searchResults, setSearchResults] = useState<Task[]>([]);
  const tasks = useAppSelector(state => state.tasks.tasks);

  useEffect(() => {
    const filteredResults = tasks.filter((task) =>
      task.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    if (searchTerm.trim().length > 0) {
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, tasks]);

  return searchResults;
};

export default useSearchQuery;
