export interface NeighborProps {
  slug: string;
  news_number?: number;
  publishAt: string;
  title: string;
  views: number;
  direction: {
    name: "NEXT" | "PREVIOUS";
    style: "justify-end" | "justify-start";
    icon: string;
  };
}
