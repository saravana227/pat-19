class User {
    constructor(public name: string) {
        this.playlists = [];
    }

    createPlaylist(name: string) {
        const playlist = new Playlist(name);
        this.playlists.push(playlist);
        return playlist;
    }
}
class Playlist {
    constructor(public name: string) {
        this.audios = [];
        this.ratings = [];
    }

    addAudio(audio: Audio) {
        this.audios.push(audio);
    }

    addRating(rating: number) {
        this.ratings.push(rating);
    }

    getAverageRating() {
        if (this.ratings.length === 0) {
            return 0;
        }
        const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
        return sum / this.ratings.length;
    }
}

class Audio {
    constructor(public name: string, public url: string) {}
}