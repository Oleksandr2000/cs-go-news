import { Link } from "react-router-dom";

import { PreviewNewsProps } from "./PreviewNews.props";

import { FULLNEWS_ROUTE } from "../../utils/routes.constants";

const PreviewNews = ({ tags, title, announce, publishAt, views, slug }: PreviewNewsProps) => {
  const time = publishAt.substring(11, 16);

  return (
    <Link to={`${FULLNEWS_ROUTE}/${String(slug)}`}>
      <div className='w-full py-2 pl-5 pr-3 mb-5 border-2 border-gray-300 bg-gray-200 shadow-lg cursor-pointer'>
        <div className='flex flex-row flex-wrap'>
          {tags &&
            tags.map((tag) => (
              <div
                key={tag._id}
                className='px-2 py-2 mt-2 mr-3 h-5  flex items-center justify-around rounded-xl bg-gray-300 hover:bg-gradient-to-r from-blue-900 to-sky-500 transition-all duration-300 text-sm text-gray-600 hover:text-white'
              >
                <img src={`https://egw.news/${tag.image}`} alt='Navi' className='w-4 h-4 mr-2' />
                <div>{tag.title}</div>
              </div>
            ))}
        </div>
        <div className='flex  flex-row'>
          <div className='w-3/4 flex flex-col'>
            <div className='text-base font-bold text-gray-900'>{title}</div>
            <div className='text-sm text-gray-500 text-left'>{announce}</div>
          </div>
          <div className='w-1/4 flex flex-col justify-center items-end'>
            <div className='text-sm text-blue-600'>{time}</div>
            <div className='h-6 flex justify-center items-end '>
              <div className='text-sm text-gray-600'>{views}</div>
              <img src='/view.png' alt='views' className='w-4 h-4 ml-2' />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PreviewNews;
