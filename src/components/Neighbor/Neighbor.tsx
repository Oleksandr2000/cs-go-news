import React from "react";

import { Link } from "react-router-dom";

import { NeighborProps } from "./Neighbor.props";

import handleStringLength from "../../services/handleStringLength";
import toDate from "../../services/toDate";
import { FULLNEWS_ROUTE } from "../../utils/routes.constants";

const Neighbor = ({ direction, title, views, publishAt, slug }: NeighborProps) => {
  return (
    <div className='m-5 px-5 py-3 bg-gray-100 hover:bg-slate-200 shadow-lg shadow-gray-400'>
      <Link to={`${FULLNEWS_ROUTE}/${slug}`}>
        <div className='flex flex-row justify-between border-b border-b-gray-300'>
          <div className='w-3/5 pb-4 text-gray-700 text-lg font-bold'>
            {handleStringLength(title, 50)}
          </div>
          <div className='w-2/5 pb-4 flex flex-col items-end justify-end'>
            <div className='flex flex-row justify-end items-center text-base text-blue-600 font-normal'>
              {toDate(publishAt)}
            </div>
            <div className='flex flex-row justify-end items-center'>
              <span className='text-base text-gray-600 font-normal'>{views}</span>
              <img src='/view.png' alt='views' className='w-3 h-4 ml-3' />
            </div>
          </div>
        </div>
        <div className={`mt-4 flex flex-row items-center ${direction.style}`}>
          {direction.name === "NEXT" ? (
            <>
              <span className='mx-3 text-lg text-gray-800 font-bold'>{direction.name}</span>
              <img src={direction.icon} alt={direction.name} />
            </>
          ) : (
            <>
              <img src={direction.icon} alt={direction.name} />
              <span className='mx-3 text-lg text-gray-800 font-bold'>{direction.name}</span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Neighbor;
