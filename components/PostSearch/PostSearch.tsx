'use client';

import { getPostsBySearch } from '@/services/getPosts';
import { FormEventHandler, useState } from 'react';
import MySearchIcon from './../../public/search.svg';
import cls from './postSearch.module.css';

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    onSearch(posts);
  };
  return (
    <form className={cls.form} onSubmit={handleSubmit}>
      <div className={cls.wrap}>
        <MySearchIcon width={30} height={30} className={cls.seachIcon} />
        <input
          className={cls.input}
          type="search"
          placeholder="..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <button className={cls.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default PostSearch;
