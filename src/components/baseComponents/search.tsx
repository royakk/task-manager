import React, { useState, useCallback, useEffect } from 'react';
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
  const [visible, setVisible] = useState<boolean>(true);
  const matchedTasks = useSearchQuery({ searchTerm });
console.log("matchedTasksvv",matchedTasks);

  const handleVisibility = useCallback(() => {
    setVisible(false);
  }, []);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchTerm(value);
      setVisible(true)
    },
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById('search-container');
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div id="search-container" className="inline-block relative w-full">
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
        value={searchTerm}
        className="w-full shadow-md text-slate-500 rounded-md bg-sky-50 p-3"
      />
      <SearchIcon className="h-6 w-6 absolute top-0 right-0 text-slate-500 mr-2 mt-3 pointer-events-none" />

      {matchedTasks.length > 0 && visible && (
        <div className="absolute f bg-sky-50 rounded-md w-full top-14 p-5 ">
          {matchedTasks.map((item) => (
            <Link onClick={handleVisibility} href={`/tasks/${item.id}`} passHref key={item.id}>
              <div className="flex justify-between">
                <p className="text-slate-500 ">{item.title}</p>
                <p className="text-slate-500 ml-8 py-1">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
