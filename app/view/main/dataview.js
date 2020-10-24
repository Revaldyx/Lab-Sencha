Ext.define('myapp.view.main.dataview', {
    extend: 'Ext.Container',
    xtype:'userdataview',
    requires: [
    'myapp.model.Speaker',
    'Ext.dataview.plugin.ItemTip',
    'Ext.plugin.Responsive'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'fit',
    cls: 'ks-basic demo-solid-background',
    shadow: true,
    items: [{
        xtype: 'dataview',
        scrollable: 'y',
        cls: 'dataview-basic', 
        itemTpl: '<div class="card"><img src=/resources/{gambar} width=150 height=150 class="img gambar"/><div class="header">{name}</div><div class="container"><br>{email}<br>{phone}<br><button type="button" class="btn btn-primary">Primary</button></div></div><br>',
        store: {
            type:'personnel',
        },
        listeners: {
           itemclick: function(view, record, item, index, e, eOpts) {
        },
        click: {
            element: 'element',
            delegate: '.btn-primary',
            fn: function() {
                Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
            }
        }
    } 
    }]
});