import { useEffect, useState } from 'react';
import { Task } from '../interfaces';
import { useAppSelector, useAppDispatch } from '@/store/store';

type Props = {
  searchTerm: string;
};

const useSearchQuery = ({ searchTerm }: Props): Task[] => {
  const [searchResults, setSearchResults] = useState<Task[]>([]);
  const tasks = useAppSelector(state => state.tasks.tasks);
  useEffect(() => {
    
    const filteredResults = tasks.filter((task) =>{
  return  task.title.toLowerCase().includes(searchTerm.toLowerCase())
    });
  if (searchTerm.trim().length) {
    setSearchResults(filteredResults);
  } else {
    setSearchResults([]);
  }
  }, [searchTerm]);

  return searchResults;
};

export default useSearchQuery;
