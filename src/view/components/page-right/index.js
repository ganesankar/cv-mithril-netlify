
import Divider  from '../divider';
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
                    m.trust(desc)
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
                            return m('div', {class: 'column col-3 col-md-3  col-sm-6 col-xs-12 '},
                                [ m(`a.btn-link[href=${u.link}][target=_blank]`, 
                                    {},
                                    [ m('h4',u.name),m('p',u.desc)])]);      
                                       
                        }),
                    )],
                )],
            )];
        case 'profile':
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                            return m('div', {class: 'column col-3 col-md-3  col-sm-6 col-xs-12 '},
                                [ m(`a.btn-link[href=${u.link}][target=_blank]`, 
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
                           
                            return m('div', {class: 'column col-6 col-md-6  col-sm-6 col-xs-12 pt-2 pb-2'},
                                [ m('p',[ m('strong',u.name),m('span.text-gray',` ${u.percentage}%`)]),
                                    m('div.bar.bar-sm', 
                                        
                                        [ m(   `div.bar.bar-item[aria-valuenow=${u.percentage}][role=progressbar]`,
                                            {style: `width:${u.percentage}%;`})]),
                                    
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
                            return m('div', {class: 'column col-12 col-md-12  col-sm-12 col-xs-12 '},
                                [ m('div.card.mb-2', 
                                    
                                    [ 
                                        m('div.card-header',
                                            [ m('div.card-title.h5',u.name),
                                                m(`a.card-subtitle.text-gray[href=${u.link}][target=_blank]`,u.company),
                                            ]),
                                        m(Divider, {type: 'date', sdate: u.startdate,edate: u.enddate}),
                                        
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
                            return m('div', {class: 'column col-12 col-md-12  col-sm-12 col-xs-12 '},
                                [ m('div.card.mb-2', 
                                        
                                    [ 
                                        m('div.card-header',
                                            [ m('div.card-title.h5',u.name),
                                                m(`a.card-subtitle.text-gray[href=${u.link}][target=_blank]`,u.company),
                                            ]),
                                        m(Divider, {type: 'date', sdate: u.startdate,edate: u.enddate}),
                                               
                                        m('div.card-body',u.desc),
                                        m(Divider, {type: 'text', text: 'Technology Used'}),
                                       
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
        case 'education':
           
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                            return m('div', {class: 'column col-12 col-md-12  col-sm-12 col-xs-12 '},
                                [ m('div.tile.mb-2', 
                                            
                                    [ 
                                        m('div.tile-content',
                                            [   m(Divider, {type: 'date', sdate: u.startdate,edate: u.enddate}),
                                                m('h4.tile-title',u.name),
                                                m('p.tile-subtitle',u.institute),
                                                m('p.card-subtitle.text-gray',u.location),
                                            ]),
                                        m('div.card-body',u.desc),
                                    ]),
                                ]);      
                                                   
                        }),
                    )],
                )],
            )];
        case 'awards':
           
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                            return m('div', {class: 'column col-12 col-md-12  col-sm-12 col-xs-12 '},
                                [ m('div.tile.mb-2', 
                                                
                                    [ 
                                        m('div.tile-content',
                                            [   m(Divider, {type: 'date', sdate: u.startdate,edate: u.enddate}),
                                                m('h4.tile-title',u.name),
                                                m('p.tile-subtitle',u.institute),
                                                m('p.card-subtitle.text-gray',u.location),
                                            ]),
                                       
                                    ]),
                                ]);      
                                                       
                        }),
                    )],
                )],
            )];
        case 'otherprojects':
           
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        vnode.attrs.values.map(function(u) { 
                            return m('div', {class: 'column col-12 col-md-12  col-sm-12 col-xs-12 '},
                                [ m('div.tile.mb-2', 
                                                
                                    [ 
                                        m('div.tile-content',
                                            [    m('h5.tile-title',u.name),
                                                m(Divider, {type: 'link', portfolio: u.portfolio,link: u.link}),
                                               
                                            ]),
                                       
                                    ]),
                                ]);      
                                                       
                        }),
                    )],
                )],
            )];

        case 'expertise':
            let contentdata= [];
            let groupKey = 'desc';
            if (vnode.attrs.values && vnode.attrs.values.length > 0) {
                let newcontentkey = [];
                let cs = [];
                vnode.attrs.values.forEach(function(item) {
                    newcontentkey.push(item[groupKey]);
                });
                let uniqkey = Array.from(new Set(newcontentkey));
                uniqkey.forEach(function(item, index) {
                    let newOb = { id: index, name: item, values: [] };
                    vnode.attrs.values.forEach(function(j) {
                        if (j[groupKey] == item) {
                            newOb.values.push(j);
                        }
                    });
                    cs.push(newOb);
                });
                contentdata = cs;
            }
            return [ m('div',
                { class: 'container '},
                [ m('div',
                    {class: 'container '},
                    [m('div',
                        {class: 'columns '},
                        contentdata.map(function(u) { 
                            return m('div', {class: 'column col-12 col-md-12  col-sm-12 col-xs-12 '},
                                [ m('div.tile.mb-2', 
                                                    
                                    [ 
                                        m('div.tile-content',
                                            [    m('h5.tile-title',u.name),
                                                m('ol',
                                                    
                                                    u.values.map(function(uv) { 
                                                        return m('li',[    m('strong',uv.name),
                                                            m('p.pt-1.pb-2',
                                                            
                                                                uv.values.map(function(uvx) { 
                                                                    return m('span.chip',uvx,
                                                                    );      
                                                                   
                                                                }),
                                                            ),        
                                                        ],
                                                        );      
                                                           
                                                    }),
                                                ),
                                                m(Divider, {type: 'link', portfolio: u.portfolio,link: u.link}),
                                                   
                                            ]),
                                           
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
                class: `column col-9 col-lg-9 col-sm-12 ${vnode.attrs.type}`,
            },[
                m('div', {
                    class: 'page-right-content',
                },returnContent(vnode)),
                
            ]);
        },
    };
}