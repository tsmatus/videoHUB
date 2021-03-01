import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, compose} from 'redux';
import reducer from './reducers/index';
import App from './routes/App';


const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [
    {
        "id": 2,
        "slug": "tvshow-2",
        "title": "In the Dark",
        "type": "Scripted",
        "language": "English",
        "year": 2009,
        "contentRating": "16+",
        "duration": 164,
        "cover": "https://images.pexels.com/photos/4889486/pexels-photo-4889486.jpeg?cs=srgb&dl=pexels-dih-andr%C3%A9a-4889486.jpg&fm=jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://vod-progressive.akamaized.net/exp=1609028595~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3965%2F17%2F444828749%2F1949638811.mp4~hmac=a003054b1f83dc88066134f2656bda3e17040d403a4bfba7ca827163d122c32e/vimeo-prod-skyfire-std-us/01/3965/17/444828749/1949638811.mp4?filename=production+ID%3A5035833.mp4" 
    },
    {
        "id": 3,
        "slug": "tvshow-3",
        "title": "Instinct",
        "type": "Adventure",
        "language": "English",
        "year": 2002,
        "contentRating": "16+",
        "duration": 137,
        "cover": "https://images.pexels.com/photos/6190858/pexels-photo-6190858.jpeg?cs=srgb&dl=pexels-askar-abayev-6190858.jpg&fm=jpg",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://stream.mux.com/tgzhDzPNfO1D3YWzAx6KYc73uXan8YuQ/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2MDkwMjUxODIsImF1ZCI6InYiLCJzdWIiOiJ0Z3poRHpQTmZPMUQzWVd6QXg2S1ljNzN1WGFuOFl1USJ9.TzssddlfTngGJWFIxSzWWipcH3yVlXnk_okIGpIQh0RDza2VVCOwhbMaLsxOk9DRfR-IQce8aBvI9V0k7Zu3rWcZ-yW7J3xionL_uzRZ6QNNs3fq4t678S0Er_w_sfDbfgRqzWW4TS_wAr6lID8Y1v9wDDiiSMzIejq3Mc3pbXpQQmXLmayOUGz3bHqmvnkRLKP0WxrLFdX7zHvT8fS3-A-uMtCBmzkPp6n4YYmHnF0HLxp5eW-CR5W8WaQF3qSML2hk8JGOPxch03eUKfl4PZdIK6Wt7iK6bnbay2kEdPi_93v6gGRkNh6uIGYTSTPkwbxh3bEXxadz0tv3VJyAbA"
    },
    {
        "id": 4,
        "slug": "tvshow-4",
        "title": "Grand Hotel",
        "type": "Comedy",
        "language": "English",
        "year": 2014,
        "contentRating": "16+",
        "duration": 163,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://youtu.be/1nydxbGhgv8"
    },
    {
        "id": 5,
        "slug": "tvshow-5",
        "title": "Stargate Atlantis",
        "type": "Scripted",
        "language": "English",
        "year": 2014,
        "contentRating": "16+",
        "duration": 194,
        "cover": "http://dummyimage.com/800x600.png/B36F20/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 6,
        "slug": "tvshow-6",
        "title": "Final Space",
        "type": "Scripted",
        "language": "English",
        "year": 2017,
        "contentRating": "16+",
        "duration": 124,
        "cover": "http://dummyimage.com/800x600.png/CCC539/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 7,
        "slug": "tvshow-7",
        "title": "The InBetween",
        "type": "Drama",
        "language": "English",
        "year": 2011,
        "contentRating": "16+",
        "duration": 179,
        "cover": "http://dummyimage.com/800x600.png/FF7A90/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    }
    ],
    "originals": [
    {
        "id": 8,
        "slug": "tvshow-8",
        "title": "Stargate Atlantis",
        "type": "Action",
        "language": "English",
        "year": 2012,
        "contentRating": "16+",
        "duration": 148,
        "cover": "http://dummyimage.com/800x600.png/306880/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 9,
        "slug": "tvshow-9",
        "title": "Alien Highway",
        "type": "Action",
        "language": "English",
        "year": 2019,
        "contentRating": "16+",
        "duration": 128,
        "cover": "http://dummyimage.com/800x600.png/604180/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 10,
        "slug": "tvshow-10",
        "title": "Elementary",
        "type": "Animation",
        "language": "English",
        "year": 2011,
        "contentRating": "16+",
        "duration": 346,
        "cover": "http://dummyimage.com/800x600.png/FF91BA/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 11,
        "slug": "tvshow-11",
        "title": "Strange Angel",
        "type": "War",
        "language": "English",
        "year": 2015,
        "contentRating": "16+",
        "duration": 226,
        "cover": "http://dummyimage.com/800x600.png/45807C/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 12,
        "slug": "tvshow-12",
        "title": "Private Eyes",
        "type": "Comedy",
        "language": "English",
        "year": 2018,
        "contentRating": "16+",
        "duration": 190,
        "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
        "id": 13,
        "slug": "tvshow-13",
        "title": "NCIS: Los Angeles",
        "type": "Drama",
        "language": "English",
        "year": 2010,
        "contentRating": "16+",
        "duration": 160,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    }
    ]
}

const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION__ || compose;
  
const store = createStore(reducer, initialState, composeEnhancers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app')
    );