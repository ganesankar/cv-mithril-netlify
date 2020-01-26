export default function() {
    
    
    function returnTitle(vnode) {
      

        var title = vnode.attrs.name;
        var desc = vnode.attrs.desc;
        switch( vnode.attrs.type ) {
        case 'intro':
            title = '';
            desc = '';
            break;
        case 'social':
            title = 'social';
            break;
        case 'contacts':
            title = 'contacts';
            break;
        default:
            title = vnode.attrs.name;
        } 
        return [ m('h4.h4Title',title),m('p',desc)];
    }
    return {
        view: function(vnode) {
            return m('div', {
                class: 'column col-3 col-lg-3 col-sm-12',
            },[
                m('div', {
                    class: 'page-left-title',
                },returnTitle(vnode)),
                
            ]);
        },
    };
}