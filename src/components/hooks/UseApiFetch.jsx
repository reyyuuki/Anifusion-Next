"use client";


const BASE_URL = "https://consumet-api-two-nu.vercel.app/meta/anilist/";
const BASE_ANiWATCH_URL = "https://aniwatch-ryan.vercel.app/anime/"
const BASE_MANGA_URL = "https://manga-ryan.vercel.app/api/"
const PROXY_URl = "https://anymey-proxy.vercel.app/cors?url=";

export const NewsetApi = async  () => {

        const response = await fetch(`${BASE_URL}trending`);
        const result = await response.json();
        return result.results;
}

export const PopularApi = async  () => {

        const response = await fetch(`${BASE_URL}popular`);
        const result = await response.json();
        return result.results;
}

export const TopAiring = async  () => {

        const response = await fetch(`${BASE_URL}airing-schedule`);
        const result = await response.json();
        return result.results;
}

export const TrendingApi = async  () => {

        const response = await fetch(`${BASE_URL}advanced-search`);
        const result = await response.json();
        return result.results;
}

export const RandomApi = async  () => {

        const response = await fetch(`${BASE_URL}random-anime`);
        const result = await response.json();
        return result.results;
}

export const FetchById = async  (id) => {
        
        const response = await fetch(`${BASE_URL}info/${id}?provider=gogoanime`);
        const result = await response.json();
        return result;
}

export const FetchByData = async  (id) => {
        
        const response = await fetch(`${BASE_URL}data/${id}?provider=gogoanime`);
        const result = await response.json();
        return result;
}

export const FetchEpisodes = async  (id) => {
        
        const response = await fetch(`${BASE_URL}episodes/${id}`);
        const result = await response.json();
        return result;
}

export const FetchEpisodesId = async  (episodeId) => {
        
        const response = await fetch(`${BASE_URL}watch/${episodeId}`);
        const result = await response.json();
        return result;
}
export const FetchBySearch = async  (name) => {
        
        const response = await fetch(`${BASE_URL}${name}`);
        const result = await response.json();
        return result.results;
}

export const MangaTableData = async  (pagenumber) => {

        const response = await fetch(`${PROXY_URl}${BASE_MANGA_URL}mangalist?page=${pagenumber}`);
        const result = await response.json();
        return result;

}

export const MangaDetail = async  (id) => {

        const response = await fetch(`${PROXY_URl}${BASE_MANGA_URL}manga/${id}`);
        const result = await response.json();
        return result;

}
export const MangaChapter = async  (chapter) => {

        const response = await fetch(`${PROXY_URl}${BASE_MANGA_URL}/manga/${chapter}`);
        const result = await response.json();
        return result;

}

export const AniWatchIdApi = async  (title) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}search?q=${title}`);
        const result = await response.json();
        const FindName = result.animes.find(find => find.name === title);
        return FindName.id;

}

export const AniWatchEpisode = async (name) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}episodes/${name}`);
        const result = await response.json();
        return result;
        
}

export const AniWatchSteam = async  (episodeId) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}episode-srcs?id=${episodeId}`);
        const result = await response.json();
        return result.episodes;

}

export const AniWatchServer = async  (episodeId, server, category) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}episode-srcs?id=${episodeId}?server=${server}&category=${category}`);
        const result = await response.json();
        return result;
}

export const AniWatchHome = async  () => {

        const response = await fetch(`${BASE_ANiWATCH_URL}home`);
        const result = await response.json();
        return result;

}

export const CategoryFetch = async  (page) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}tv?page=${page}`);
        const result = await response.json();
        return result.animes;

}
export const AniWatchAnimeId = async  (id) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}info?id=${id}`);
        const result = await response.json();
        return result;

}

export const AniWatchAnimeSearch = async  (name) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}search?q=${name}`);
        const result = await response.json();
        return result;

}

export const AniWatchSearchSuggestion = async  (name) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}search/suggest?q=${name}`);
        const result = await response.json();
        return result;

}

export const AniWatchCategory = async  (category) => {

        const response = await fetch(`${BASE_ANiWATCH_URL}${category}`);
        const result = await response.json();
        return result;

}

export const AniWatchSchedule = async  (date) => {

        
        const response = await fetch(`${BASE_ANiWATCH_URL}schedule?date=${date}`);
        const result = await response.json();
        return result;

}
