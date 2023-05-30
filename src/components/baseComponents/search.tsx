import React, { useState, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { tasksActions } from '../../store/taskSlice';
import useSearchQuery from '@/customHooks/useSearchQuery';
import Link from 'next/link';

interface Props {
  onSearch?: (searchTerm: string) => void;
}

const Search: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const matchedTasks = useSearchQuery({searchTerm});
  console.log("matchedTasks", matchedTasks);
  
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((store) => store.tasks.tasks);
  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchTerm(value);
      // onSearch(value);
    },
    []
  );

  return (
    <div className="inline-block relative w-full">
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
        value={searchTerm}
        className='w-full shadow-md text-slate-500 rounded-md bg-sky-50 p-3'
      />
      <SearchIcon className="h-6 w-6 absolute top-0 right-0 text-slate-500 mr-2 mt-3 pointer-events-none" />
      
      {matchedTasks.length > 0 && (
        <div className="absolute bg-sky-50 rounded-md w-full top-14 p-3">
          {matchedTasks.map((item) => (

            <Link  href={`/tasks/${item.id}`} passHref>
            <div className='flex' key={item.id}>
              <p className='text-slate-500'>{item.title}</p>
              <p className='text-slate-500 ml-8'>{item.date}</p>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
