
import Header from '../components/header';
import PageLeft from '../components/page-left';
import PageRight  from '../components/page-right';

var Data = {
    cv: {
        list: null,
        error: '',
        fetch: function() {
            m.request({
                method: 'GET',
                url: 'https://ganesan-cv-reactjs.netlify.com/.netlify/functions/cv-all',
            })
                .then(function(items) {
                    console.log('items', items);
                    const contentdata = [];
                    items.forEach(function(item) {
                        contentdata.push(item.data);
                    });
                    const content = contentdata.sort((a, b) =>
                        a.id > b.id ? 1 : b.id > a.id ? -1 : 0,
                    );
                    Data.cv.list = content;
                })
                .catch(function(e) {
                    Data.cv.error = e.message;
                });
        },
    },
};
export default function() {
    return {       
        oninit: Data.cv.fetch,	
        view: function(vnode) {
            return Data.cv.error ? [
                m('.error', Data.cv.error),
            ] : Data.cv.list ? [
                m(Header),
                Data.cv.list.map(function(item) {
                    return m('section', {
                        class: 'container-fluid',
                    },[
                        m('div', {
                            class: 'container',
                        },[
                            m('div', {
                                class: 'columns',
                            },[
                                m(PageLeft, item),
                                m(PageRight, item),
                            ]),
                        ]),
                        
                    ]);
                }),
            ] : m('.loading-icon');
        },
    };
}