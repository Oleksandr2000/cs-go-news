import React from "react";

import { MathesProps } from "./Mathes.props";

import toDate from "../../services/toDate";
import toTime from "../../services/toTime";
import "./Mathes.scss";

const Mathes = ({ data, event_logo, event_title }: MathesProps) => {
  return (
    <div className='event'>
      <div className='event__title'>
        <img src={`https://egw.news${event_logo}`} alt={event_title} className='mr-3' />
        {event_title}
      </div>
      {data.list.map((item: any) => (
        <div key={item._id} className='event__item'>
          <div className='event__date text-gray-800'>{toDate(item.start_date)}</div>
          <div className='event__team event__team-home'>
            <div className='event__team__name-home'>{item.home_team_name}</div>
            <img src={`https://egw.news${item.home_team_logo}`} alt={item.home_team_name} />
          </div>
          <div className='event__time'>{String(toTime(item.start_date))}</div>
          <div className='event__team event__team-away'>
            <img src={`https://egw.news${item.away_team_logo}`} alt={item.away_team_name} />
            <div className='event__team__name-away'>{item.away_team_name}</div>
          </div>
          <div className='event__type'>{item.best_type}</div>
        </div>
      ))}
    </div>
  );
};

export default Mathes;
