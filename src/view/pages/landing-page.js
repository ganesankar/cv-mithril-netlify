
import Header from '../components/header';
import Footer from '../components/footer';
import PageLeft from '../components/page-left';
import PageRight  from '../components/page-right';

var Data = {
    cv: {
        list: null,
        contentheader: null,
        error: '',
        fetch: function() {
            m.request({
                method: 'GET',
                url: 'https://ganesan-cv-reactjs.netlify.app/.netlify/functions/cv-all',
            })
                .then(function(items) {
                    const contentdata = [];
                    const contentheader = [];
                    items.forEach(function(item) {
                        contentdata.push(item.data);
                        contentheader.push(item.data.type);
                    });
                    const content = contentdata.sort((a, b) =>
                        a.id > b.id ? 1 : b.id > a.id ? -1 : 0,
                    );
                    Data.cv.list = content;
                    Data.cv.contentheader = contentheader;
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
                m(Header, {list: Data.cv.contentheader}),
                Data.cv.list.map(function(item) {
                    return m('section', {
                        class: 'container-fluid sectionAll',
                        id: item.type,
                    },[
                        m('div', {
                            class: 'container SectionBase',
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
                m(Footer)
            ] : m('.loading-icon');
        },
    };
}
