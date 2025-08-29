import type { Episode } from "./Episode";

export default interface Season {
  id: number;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}