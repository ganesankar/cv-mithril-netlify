import { DateTime } from 'luxon';
export default function() {
    
    
    function returnContent(vnode) {
      

        var type = vnode.attrs.type|| '';
        var sdate = vnode.attrs.sdate || '';
        var edate = vnode.attrs.edate || '';
        var text = vnode.attrs.text || '';
        var link = vnode.attrs.link || '';
        var portfolio = vnode.attrs.portfolio || '';

        switch( type ) {
        case 'date':
            return [ 
                m('div.el-divider-text.is-right',
              
                    [ 
                        m('span',sdate != 'c'?  DateTime.fromFormat(sdate, 'dd/mm/yyyy').toFormat('MMM yyyy') : 'Present'),
                        m('span','-'),
                        m('span',edate != 'c'?  DateTime.fromFormat(edate, 'dd/mm/yyyy').toFormat('MMM yyyy') : 'Present'),
                        
                    ]),
            ];
        case 'text':
            return [ 
                m('div.el-divider-text.is-left',
              
                    [   m('span',text) ]),
            ];
            case 'link':
                return [ 
                    m('div.el-divider-text.is-left',
                  
                        [     m(`a.card-subtitle.text-gray[href=${portfolio? portfolio : link}][target=_blank]`,`${portfolio? portfolio : link}`),
                    ]),
                ];
        default:
            return [ 
                m('div.el-divider-text.is-left',
              
                    [   m('span',text) ]),
            ];
        } 
        
    }
    return {
        view: function(vnode) {
            return m('div.el-divider',[returnContent(vnode) ]);
        },
    };
}