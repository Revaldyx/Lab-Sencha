Ext.define('myapp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'myapp.view.main.MainController',
        'myapp.view.main.MainModel',
        'myapp.view.main.List',
        'myapp.view.main.dataview',
        'myapp.view.main.logout',
        'myapp.view.main.Carousel',
        'myapp.view.main.audio',
        'myapp.view.main.video',
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'charts',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype:'panel',
                layout:{
                    type:'hbox',
                    pack:'fit',
                    align:'stretch'
                },
                items:[{
                    xtype: 'bdv',
                    flex:2
                },{

                    xtype:'formedit',
                    flex:1
                }]
            }]
          //xtype: 'mainlist',
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            layout:'fit',
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [{
               
            }]
        },{
            title: 'Logout',
            iconCls: 'x-fa fa-cog',
            layout: 'fit',
            items: [{
               // xtype: 'column3d'
            }]
        }
    ]
});
