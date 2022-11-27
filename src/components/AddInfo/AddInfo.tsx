import React from "react";

import { AddInfoProps } from "./AddInfo.props";

const AddInfo = ({ logo, name }: AddInfoProps) => {
  return (
    <div className='mr-5 py-1 px-2 flex flex-row justify-start items-center hover:bg-gradient-to-r from-slate-900 to-sky-800'>
      <img src={`https://egw.news/${logo}`} alt={name} className='w-8 h-8' />
      <span className='ml-3 text-lg text-gray-100 font-medium'>{name}</span>
    </div>
  );
};

export default AddInfo;
