export default function() {
    
    
    function returnContent(vnode) {
       

        var title = vnode.attrs.name;
        var desc = vnode.attrs.desc;
        switch( vnode.attrs.type ) {
        case 'intro':
            return [ m('div',
                { class: 'hero '},
                [ 
                    m('h4',title),
                    m('p',desc),
                ]),
            ];
        case 'social':
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                            return m('div', {class: 'column col-sm-3 col-xs-12 '},
                                [ m(`a.btn[href=${u.elink}][target=_blank]`, 
                                    {},
                                    u.name)]);      
                                           
                        }),
                    )],
                )],
            )];
        case 'contacts':
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                            return m('div', {class: 'column col-md-3  col-sm-6 col-xs-12 '},
                                [ m(`a.btn.btn-link[href=${u.link}][target=_blank]`, 
                                    {},
                                    [ m('h4',u.name),m('p',u.desc)])]);      
                                       
                        }),
                    )],
                )],
            )];
        case 'skills':
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                           
                            return m('div', {class: 'column col-6 col-md-6  col-sm-6 col-xs-12 '},
                                [ m('strong',u.name),
                                    m('div.bar.bar-sm', 
                                        
                                        [ m(   `div.bar.bar-item[aria-valuenow=${u.percentage}][role=progressbar]`,
                                            {style: `width:${u.percentage}%;`})]),
                                    m('div',u.percentage),
                                ]);      
                                           
                        }),
                    )],
                )],
            )];
        case 'experience':
           
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                            console.log(u);
                            return m('div', {class: 'column col-12 col-md-12  col-sm-12 col-xs-12 '},
                                [ m('div.card.mb-2', 
                                    
                                    [ 
                                        m('div.card-header',
                                            [ m('div.card-title.h5',u.name),
                                                m(`a.card-subtitle.text-gray[href=${u.link}][target=_blank]`,u.company),
                                            ]),
                                        m('div.card-body',u.desc),
                                        m('div.card-footer', 
                                            [
                                                m('div.accordion',
                                                    [ 
                                                        m(`input[id=accordion${u.id}][type=checkbox][name=accordion-checkbox][hidden=true]`),
                                                        m(`label.accordion-header[for=accordion${u.id}]`, [ m('i.icon.icon-arrow-right mr-1'),m('span','Responsibility')]),
                                                        m('div.accordion-body',
                                                            [
                                                                m('ul', u.values.map(function(uv) { 
                                                                    return m('li', uv.name);      
                                                                                           
                                                                })),
                                                            ],
                                                        ),
                                                    ]),
                                            ]  ),
                                    ]),
                                ]);      
                                           
                        }),
                    )],
                )],
            )];
        case 'projects':
           
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                            console.log(u);
                            return m('div', {class: 'column col-12 col-md-12  col-sm-12 col-xs-12 '},
                                [ m('div.card.mb-2', 
                                        
                                    [ 
                                        m('div.card-header',
                                            [ m('div.card-title.h5',u.name),
                                                m(`a.card-subtitle.text-gray[href=${u.link}][target=_blank]`,u.company),
                                            ]),
                                        m('div.card-body',u.desc),
                                        m('div.card-footer', 
                                        [
                                            m('div', u.technology.map(function(uv) { 
                                                return m('span.chip', uv);      
                                                                       
                                            })),
                                        ]  ),
                                    ]),
                                ]);      
                                               
                        }),
                    )],
                )],
            )];
        default:
            return [ m('h4',title),m('p',desc)];
        } 
        
    }
    return {
        view: function(vnode) {
            return m('div', {
                class: 'column col-10 col-lg-9 col-sm-12',
            },[
                m('div', {
                    class: 'page-right-content',
                },returnContent(vnode)),
                
            ]);
        },
    };
}