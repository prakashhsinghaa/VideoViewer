import axios from 'axios';
const KEY = 'AIzaSyC3smaIJY1sCfXYd2Wuyczj0PtPhKWcprw';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
       part:'snippet', 
       type:'video',
       maxResults:5,
       key:KEY
          
    }
});