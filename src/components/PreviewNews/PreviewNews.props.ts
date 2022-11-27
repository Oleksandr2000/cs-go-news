import { newsTags } from "../../redux/slice/News/NewsSlice.props";

export interface PreviewNewsProps {
  tags?: newsTags[];
  publishAt: string;
  views?: number;
  title: string;
  announce?: string;
  slug: string;
}
