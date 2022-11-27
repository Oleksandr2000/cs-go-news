import React from "react";

import { useLocation, useParams } from "react-router";

import styles from "./FullNews.module.scss";

import AddInfo from "../../components/AddInfo/AddInfo";
import Mathes from "../../components/Mathes/Mathes";
import Neighbor from "../../components/Neighbor/Neighbor";
import Tournaments from "../../components/Tournaments/Tournaments";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import { fetchOneNews } from "../../redux/slice/Article/ArticleSlice";
import { Player, Team, TournamentsType } from "../../redux/slice/Article/ArticleSlice.props";
import { newsTags } from "../../redux/slice/News/NewsSlice.props";
import toDate from "../../services/toDate";
import toTime from "../../services/toTime";

const FullNews = () => {
  const { article, loadingArticle, eventMatches, eventsData, teams, players, neighbor } =
    useAppSelector((store) => store.article);
  const { lang } = useAppSelector((store) => store.news);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { newsNumber, slug } = useParams();

  const handlerSrc = () => {
    const contentImg = document.querySelectorAll(".se-component > figure");
    contentImg.forEach((item) => {
      const img = item.getElementsByTagName("img")[0];
      const srcEdit = img.src.split("uploads")[1];
      img.setAttribute("src", `${process.env.REACT_APP_BASE_IMG_URL}/uploads${srcEdit}`);
    });
  };

  React.useEffect(() => {
    dispatch(fetchOneNews({ slug: String(`${newsNumber}/${slug}`), lang }));
  }, [newsNumber]);

  React.useEffect(() => {
    if (loadingArticle === "loaded") {
      handlerSrc();
    }
  }, [loadingArticle]);

  if (loadingArticle === "loading") {
    return (
      <div className='h-screen w-full flex justify-center items-center'>
        <img src='/PulseLoader.svg' alt='loading...' />
      </div>
    );
  }

  return (
    <div className='flex flex-row'>
      <div className='w-full lg:w-2/3'>
        <div className={styles.article}>
          <div className={styles.head}>
            <div className='w-full md:w-3/4'>
              <img
                src={`	${process.env.REACT_APP_BASE_IMG_URL}/${article?.image}`}
                alt={article?.title}
                className='md:h-96'
              />
            </div>
            <div className='w-full md:w-1/4 md:h-96 md:pl-5 flex flex-row md:flex-col justify-between items-center'>
              <div className='w-full flex flex-row justify-between  md:flex-col py-3 md:py-0 border-b border-b-gray-300 md:border-none'>
                <div className={styles.author}>{article?.author.username}</div>
                <div className={styles.relative}>
                  <span>{article?.views}</span>
                  <img src='/view.png' alt='views' className='h-4 w-4 ml-2' />
                </div>
                <div className={styles.relative}>
                  <span>0</span>
                  <img src='/comments.png' alt='comments' className='h-4 w-4 ml-2' />
                </div>
                <div className='md:pb-3 md:border-b md:border-gray-300 text-sm text-blue-500 text-center'>
                  {article && `${toTime(article.publishAt)} ${toDate(article.publishAt)}`}
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='w-full flex flex-row justify-around items-end'>
                  <div className={styles.rating}>
                    <div className='text-md font-medium text-green-700'>1</div>
                    <div className='py-5 border-b-2 border-b-green-700'>
                      <img src='/like.png' alt='like' className='w-8 h-8 cursor-pointer' />
                    </div>
                  </div>
                  <div className={styles.rating}>
                    <div className='text-md font-medium text-red-700'>0</div>
                    <div className='py-5 border-b-2 border-b-red-700'>
                      <img src='/dislike.png' alt='dislike' className='w-8 h-8 cursor-pointer' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className='py-4 md:py-8 text-xl md:text-3xl text-center md:text-left font-bold text-slate-700'>
            {article?.title}
          </h1>
          <div className='pb-5 flex flex-row flex-wrap'>
            {article?.tags &&
              article?.tags.map((tag: newsTags) => (
                <div key={tag._id} className={styles.tag}>
                  <img
                    src={`${process.env.REACT_APP_BASE_IMG_URL}/${tag.image}`}
                    alt='Navi'
                    className='w-4 h-4 mr-2'
                  />
                  <div>{tag.title}</div>
                </div>
              ))}
          </div>
          {eventsData && (
            <div>
              <h3 className='text-2xl font-bold text-gray-500'>More about tournaments:</h3>
              {eventsData.map((item: TournamentsType) => (
                <Tournaments key={item._id} title={item.title} image={item.logo} />
              ))}
            </div>
          )}
          {article?.contentArr.map((item, index: number) => {
            if (item === Object.keys(eventMatches)[0]) {
              return (
                <Mathes
                  key={index}
                  data={eventMatches[item]}
                  event_logo={eventMatches[item].event.logo}
                  event_title={eventMatches[item].event.title}
                />
              );
            }
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: item }} className='content' />
            );
          })}
          {teams && (
            <div>
              <h3 className={styles.add_info__title}>More about teams:</h3>
              <div className={styles.add_info__wrapper}>
                {teams.map((item: Team) => (
                  <AddInfo key={item._id} name={item.name} logo={item.logo} />
                ))}
              </div>
            </div>
          )}
          {players && (
            <div>
              <h3 className={styles.add_info__title}>More about players:</h3>
              <div className={styles.add_info__wrapper}>
                {players.map((item: Player) => (
                  <AddInfo key={item._id} name={item.name} logo={item.photo} />
                ))}
              </div>
            </div>
          )}
          <div className='flex flex-row justify-between'>
            {article?.sourceHost && (
              <div className='flex flex-col'>
                <div className={styles.source}>Source:</div>

                <a href={article.sourceLink} className='text-xl text-blue-600'>
                  {article.sourceHost}
                </a>
              </div>
            )}
            <div>
              <div className={styles.source}>Share:</div>
              <div className='flex flex-row'>
                <a
                  href={`https://twitter.com/intent/tweet?url=${location.pathname}`}
                  className={styles.social_network}
                >
                  <img
                    src={`${process.env.REACT_APP_BASE_IMG_URL}/asset/share/twit.svg`}
                    alt='twit'
                  />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${location.pathname}`}
                  className={styles.social_network}
                >
                  <img src={`${process.env.REACT_APP_BASE_IMG_URL}/asset/share/fb.svg`} alt='fb' />
                </a>
                <a
                  href={`http://www.reddit.com/submit?url=${location.pathname}`}
                  className={styles.social_network}
                >
                  <img
                    src={`${process.env.REACT_APP_BASE_IMG_URL}/asset/share/reddit.svg`}
                    alt='reddit'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='my-10 grid overflow-hidden grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-3 md:gap-5 '>
          {neighbor.prev && (
            <Neighbor
              title={neighbor.prev.title}
              views={neighbor.prev.views}
              slug={neighbor.prev.slug}
              publishAt={neighbor.prev.publishAt}
              direction={{
                name: "PREVIOUS",
                style: "justify-start",
                icon: "/prev.png",
              }}
            />
          )}
          {neighbor.next && (
            <Neighbor
              title={neighbor.next.title}
              views={neighbor.next.views}
              slug={neighbor.next.slug}
              publishAt={neighbor.next.publishAt}
              direction={{
                name: "NEXT",
                style: "justify-end",
                icon: "/next.png",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FullNews;
