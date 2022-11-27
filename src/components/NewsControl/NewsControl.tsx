import SelectOptions from "./NewsControl.constants";

import { useAppSelector } from "../../hooks/useContextHooks";
import { setSort } from "../../redux/slice/News/NewsSlice";
import CustomSelect from "../Select/Select";

const NewsControl = () => {
  const { sort } = useAppSelector((store) => store.news);

  return (
    <div>
      <div className='flex flex-row justify-end items-center py-4 mb-4 border-b-2 border-gray-200'>
        <span className='mr-4 text-sm text-gray-600 font-bold'>Sort:</span>
        <CustomSelect
          options={SelectOptions}
          value={sort}
          onChange={(event: any) => setSort(event)}
        />
      </div>
    </div>
  );
};

export default NewsControl;
