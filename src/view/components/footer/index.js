export default function(initialVnode) {
    let active = false; // added a variable
    const tableData=  [
        {
            name: 'JavaScript Framework',
            address: 'Spectre UI, mithril.js, Nuxt.js',
        },
        {
            name: 'JavaScript Library',
            address: 'Lodash, Luxon',
        },
        {
            name: 'Server',
            address: 'Netlify, Lambda',
        },
        {
            name: 'CDN',
            address: 'Netlify',
        },
        {
            name: 'Database',
            address: 'FaunaDB',
        },
        {
            name: 'Others',
            address: 'Webpack, Normalize, ESLint, ScSS',
        },
    ];
    
    return {
        
        view: function(vnode) {
            
            return m('footer', {
                class: 'navbar ',
            },[
                m('div.modal ', {class: ` ${vnode.state.active ? 'active': ''}`},
                    [
                        m('div.modal-overlay',
                            {
                                onclick: function() {   vnode.state.active = !vnode.state.active;},
                            }),
                        m('div.modal-container',
                            [
                                m('div.modal-header',
                                    [
                                        m('span.btn btn-clear float-right',{
                                            onclick: function() { 
                                               
                                                vnode.state.active = !vnode.state.active;
                                            
                                            }}),
                                        m('div.modal-title h5', 'Technology Used'),
                                    ]),
                                m('div.modal-body', 
                                    [ m('table.table',
                                    [m('tbody',
                                    
                                    tableData.map(function(u) { 
                                        return m('tr', [m('td',u.name) , m('td',u.address)]);      
                                                       
                                    }),
                                )],
                                
                                    )],
                                ),
                            ]),
                    ],
                ),
                m('section', {
                    class: 'navbar-section',
                },[
                    m('a[href=http://www.ganesan.xyz][target=_blank]', {
                        class: 'btn btn-link',
                    }, [ m('i.icon.icon-link', ' '),m('span', 'GANESAN.XYZ')]),
                    m('div.btn.btn-link', {
                        onclick: function() { 
                           
                            vnode.state.active = !vnode.state.active;
                        
                        }}, [ m('i.icon.icon-flag', ' '),m('span', 'INFO')] ),
                ]),
              
            ]);
        },
    };
}