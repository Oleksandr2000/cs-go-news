import React from "react";
import { Link } from "react-router-dom";

import { NEWS_ROUTE } from "../../utils/routes.constants";

const Header = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-blue-700 shadow-lg shadow-slate-900'>
      <div className='container'>
        <div className='p-3 flex justify-between items-center'>
          <Link to={NEWS_ROUTE}>
            <div className='text-xl font-bold text-gray-200 pb-1 border-b border-b-gray-200'>
              All News
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
