import React, { useState, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
interface Props {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchTerm(value);
      onSearch(value);
    },
    [onSearch]
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
       <SearchIcon  className="h-6 w-6 absolute top-0 right-0 text-slate-500 mr-2 mt-3 pointer-events-none"/>
    </div>
  );
};

export default Search;
