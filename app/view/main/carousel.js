Ext.define('myapp.view.main.Carousel', {
    extend: 'Ext.Container',
    xtype:'carousell',
    requires: [
        'Ext.carousel.Carousel'
    ],

    cls: 'cards',
    shadow: true,
    layout: {
        type: 'vbox',
        align:'stretch',
        pack: 'center'
    },
    defaults: {
        cls: 'demo-solid-background',
        flex: 1
    },
    items: [{
        xtype: 'carousel',
        items: [{
            html: '<p>Swipe left to show the next card…</p>',
            items:[{
                xtype: 'button',
                text: 'Button',
                margin: '0 0 110 110',
                handler: function(){
                    //you can put here any controls
                    window.open("http://google.com", "_self")
                  }      
            }]
        },
        {
            html: '<p>You can also tap on either side of the indicators.</p>',
            cls: 'card'
        },
        {
            html: 'Card #3',
            cls: 'card'
        }]
    }]
});