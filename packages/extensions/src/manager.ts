import * as JioSaavn from "./Plugins/JioSaavn";
import * as Youtube from "./Plugins/Youtube";
import { songsAdded } from '@serenity/core';
import * as data from '../assets/Media.json';
// list all plugins

// get plugin by id
// 

// https://drive.google.com/file/d/1rE2uEQAkPMBSMZHmMQR5UUWNKaiZa5vc/view?usp=sharing
//  http://docs.google.com/uc?export=open&id=1rE2uEQAkPMBSMZHmMQR5UUWNKaiZa5vc
function getPlugin(id: string) {
}
// get all songs and playlists from all plugins which are enabled

export function init() {
    return (dispatch: any) => {
        // JioSaavn.getJioSaavnMusic().then(songs => {
        //     console.log(songs);
        // @ts-ignore
        dispatch(songsAdded(data.media[1].children));
        // searchSongs("thinking out loud").then(songs => {

        //     console.log(songs);
        // })
        // });
    }
}

export async function searchSongs(query: string) {
    const media = [];
    // const jioSaavnSongs = await JioSaavn.searchJioSaavnMusic(query);
    // if (jioSaavnSongs && jioSaavnSongs.length) {
    //     media.push({
    //         title: 'JioSaavn Music',
    //         data: jioSaavnSongs,
    //     });
    // }

    const youtubeSongs = await Youtube.searchYoutubeMusic(query);
    if (youtubeSongs && youtubeSongs.length) {
        media.push({
            title: 'Youtube Music',
            data: youtubeSongs,
        });
    }
    return media;
}