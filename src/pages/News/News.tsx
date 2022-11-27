import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import NewsLayout from "../../layouts/NewsLayout/NewsLayout";
import { fetchNews } from "../../redux/slice/News/NewsSlice";

const News = () => {
  const { sort, lang } = useAppSelector((store) => store.news);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchNews({ sort, lang }));
  }, [sort]);

  return (
    <div className='flex flex-row w-full md:w-2/3'>
      <NewsLayout />
    </div>
  );
};

export default News;
