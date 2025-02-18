import * as data from '../../../assets/Media.json';

const { media } = data;
export function getSongsFromPlaylist(id: string) {
    // @ts-ignore
    let songs: any[] = [];
    for (let index in media) {
        const playlist = media[index];
        if (playlist.id === id) {
            songs = playlist.children;
        }
    }
    return songs;
}

export function getPlaylists() {
    // @ts-ignore
    return media.map(playlist => {
        const playlistMetadata = {
            id: playlist.id,
            name: playlist.title,
            owner: 'Serenity',
            cover: playlist.cover,
        };
        return playlistMetadata;
    })
}