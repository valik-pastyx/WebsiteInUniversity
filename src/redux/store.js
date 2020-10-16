/* CONTENT STORE */
import boots from '../components/Content/Store/img/boots.png';
import equipment from '../components/Content/Store/img/equipment.png';
import tent from '../components/Content/Store/img/tent.png';
import tShirt from '../components/Content/Store/img/tShirt.png';
/* FOOTER FULL */
import linkedin from '../components/Footer/img/linkedin.png';
import instagram from '../components/Footer/img/instagram.png';
import twitter from '../components/Footer/img/twitter.png';
import facebook from '../components/Footer/img/facebook.png';

/* REDUCERS */ 
import footerReducer from './footerReducer';
import contentReducer from './contentReducer';
import headerReducer from './headerReducer';

const ADD_NAME = "ADD-NAME";
const UPDATE_NEW_NAME_TEXT = "UPDATE-NEW-NAME-TEXT";

let store = {
    _state: {
        header: {
        
        },
        content: {
     
        },
        footer: {
            
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.footer = footerReducer(this._state.footer, action);
        this._state.content = contentReducer(this._state.content, action);
        this._state.header = headerReducer(this._state.header, action);
        this._callSubscriber(this._state);
    }

}


export default store;
window.store = store;