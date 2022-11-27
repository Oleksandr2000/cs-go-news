export interface News {
  _id: string;
  tags: newsTags[];
  image: string;
  game_slug: string;
  slug: string;
  news_number: number;
  createdAt: string;
  publishAt: string;
  views: number;
  title: string;
  announce: string;
  characters: number;
  uid: string;
  username: string;
  userslug: string;
}

export interface FetchNewsResponce {
  latest: {
    counterstrike: News[];
    esports: any;
    gaming: any;
    crypto: any;
  };
}

export interface NewsSlicepRrops {
  data: News[];
  lang: string;
  status: string;
  page: number;
  sort: "publishAtDesc" | "publishAtAsc" | "viewDesc" | "viewAsc";
}

export type newsTags = {
  title: string;
  slug: string;
  image: string;
  _id: string;
};
