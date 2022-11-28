import NewsControl from "../../components/NewsControl/NewsControl";
import PreviewNews from "../../components/PreviewNews/PreviewNews";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import { fetchMoreNews } from "../../redux/slice/News/NewsSlice";
import { News } from "../../redux/slice/News/NewsSlice.props";
import compareDate from "../../services/compareDate";

const NewsLayout = () => {
  const { data } = useAppSelector((store) => store.news);

  const dispatch = useAppDispatch();
  const { page, sort, lang } = useAppSelector((store) => store.news);
  const isAdding = useAppSelector((store) => store.news.status) === "adding";

  const addNews = () => {
    dispatch(fetchMoreNews({ page, sort, lang }));
  };

  return (
    <div className='w-full my-10 px-5 py-2 bg-gray-200 shadow-xl shadow-gray-400'>
      <NewsControl />
      {data.map((item: News, index: number, array: News[]) => {
        return (
          <div key={item._id}>
            {index === 0 && (
              <div className='mb-2 text-sm text-gray-600 font-bold'>
                <i>{compareDate(array[0].publishAt.substring(0, 10))}</i>
              </div>
            )}
            {index !== 0 &&
            array[index].publishAt?.substring(0, 10) !==
              array[index - 1].publishAt?.substring(0, 10) ? (
              <div className='mb-2 text-sm text-gray-600 font-bold'>
                <i>{compareDate(item.publishAt.substring(0, 10))}</i>
              </div>
            ) : null}
            <PreviewNews {...item} />
          </div>
        );
      })}
      {isAdding ? (
        <div className='mt-10 flex justify-center items-center'>
          <img src='/PulseLoader.svg' alt='loading...' className='h-24' />
        </div>
      ) : (
        <div className='p-1 bg-gradient-to-r from-blue-900 to-sky-500 ' onClick={addNews}>
          <button className='w-full py-4 bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-sky-500 transition-all duration-300'>
            <span className='hover:text-white font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-900 to-sky-500'>
              SHOW MORE
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsLayout;
