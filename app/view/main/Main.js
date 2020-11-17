Ext.define('myapp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'myapp.view.main.MainController',
        'myapp.view.main.MainModel',
        'myapp.view.main.List',
        'myapp.view.main.dataview',
        'myapp.view.chart.Column',
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
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            layout:'fit',
            items: [{
                xtype: 'myaudio1'
            }]
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [{
                xtype: 'myvideo'
            }]
        },{
            title: 'Logout',
            iconCls: 'x-fa fa-cog',
            layout: 'fit',
            items: [{
                xtype: 'logout'
            }]
        }
    ]
});
