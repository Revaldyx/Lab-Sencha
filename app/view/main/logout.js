Ext.define('myapp.view.main.logout', {
    extend: 'Ext.Panel',
    xtype:'logout',
    requires: [
        'Ext.layout.VBox',
        'Ext.Button',
    ],
    controller: 'main',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    shadow: true,
    cls: 'demo-solid-background',
    platformConfig: {
        phone: {
            width: '100%',
            height: '100%'
        }
    },
    width: 300,
    height: 300,
    items: [
        {
            xtype: 'button',
            reference: 'button',
            text: 'Button',
            margin: '0 0 16 0',
            handler: 'onClickButton'
        },
    ]
});