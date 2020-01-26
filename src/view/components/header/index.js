export default function() {
    var count = 0; // added a variable
    return {
        view: function() {
            return m('header', {
                class: 'navbar',
            },[
                m('section', {
                    class: 'navbar-section',
                },[
                    m('a', {
                        class: 'navbar-brand mr-2',
                    }, 'Ganesan Karuppaiya'),
                ]),
                m('section', {
                    class: 'navbar-section',
                }, [
                    m('a', {
                        class: 'btn btn-link',
                    }, 'Menu'),
                ]),
            ]);
        },
    };
}