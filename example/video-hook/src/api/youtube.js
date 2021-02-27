import axios from 'axios';

const KEY = 'AIzaSyBVEYx6jVWizYZ9AG81bL8mqZfpZdHoaWA';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:5,
    type: 'video',
    key:KEY
  }
});
