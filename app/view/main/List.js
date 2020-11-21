Ext.define('myapp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'myapp.store.Personnel'
    ],
   
    title: 'Personnel',

    bind:{
        store: '{personnel}'
    },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            scrollable: {
                y: false
            },
            items: [
                {
                    xtype:'button',
                    text: 'Load data',
                    ui: 'action',
                    scope: this,
                    listeners:{
                        tap:'onReadClicked'
                    }
                }
            ]}
        ],

    viewModel:{
        stores:{
            personnel: {
                type:'personnel'
            }
        },
     },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 },
        { text: 'Jurusan', dataIndex: 'jurusan', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
