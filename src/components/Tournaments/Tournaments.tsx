import { TournamentsProps } from "./Tournaments.props";

const Tournaments = ({ title, image }: TournamentsProps) => {
  return (
    <div className='my-5 py-3 pl-5 pr-10 flex flex-row items-center justify-start  bg-gradient-to-br from-slate-800 to-sky-600'>
      <img src={`https://egw.news/${image}`} alt={title} />
      <div className='ml-5 text-lg text-gray-100 font-medium'>{title}</div>
    </div>
  );
};

export default Tournaments;
