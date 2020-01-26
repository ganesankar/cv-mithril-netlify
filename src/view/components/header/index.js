export default function(initialVnode) {
    let active = false; // added a variable
   
    function openMenu() {
        active = !active;
    }
    function scrollIntoView(selector, offset = 0) {
        window.scroll(0, document.querySelector(selector).offsetTop - offset);
      }
    return {
        
        view: function(vnode) {
            
            return m('header', {
                class: 'navbar docs-navbar',
            },[
                m('section', {
                    class: 'navbar-section',
                },[
                    m('a', {
                        class: 'navbar-brand mr-2 pl-2',
                    }, '  Ganesan Karuppaiya'),
                ]),
                m('section', {
                    class: 'navbar-section',
                }, [
                    m('div.dropdown', [
                        m('div.btn-group', [
                            m('button.btn.btn-link', 
                           
                                {onclick: function() {
                                   
                                    vnode.state.active = !vnode.state.active;
                                    console.log('active', vnode.state);
                                },
                                },[m('i.icon.icon-menu')]),
                         
                            m('ul.menu.right',
                                {style: `display:${vnode.state.active? 'block': 'none'};`},
                                vnode.attrs.list.map(function(uv) { 
                                    return m('li',  m('div.link', {
                                        onclick: function() { 
                                            var p = document.querySelector(`#${uv}`).offsetTop;
                                            vnode.state.active = !vnode.state.active;
                                            window.scrollTo({ top: p, behavior: 'smooth'});}
                                        ,
                                    }, uv));      
                                                   
                                })),
                        ]),
                    ]),
                ]),
            ]);
        },
    };
}