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
                xtype: 'chartss'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            layout: 'fit',
            items: [{
                xtype: 'bdv'
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
