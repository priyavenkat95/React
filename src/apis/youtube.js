import axios from 'axios';

const KEY = 'AIzaSyBc1HWaMHwZEffE8w43_Fz-1mHTd2Zgz1M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})