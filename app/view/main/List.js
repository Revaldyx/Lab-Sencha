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

    plugins: {
        type: 'grideditable',
    },

    viewModel:{
        stores:{
            personnel: {
                type:'personnel'
            }
        },
     },

    columns: [
        { text: 'ID',  dataIndex: 'user_id', width: 100},
        { text: 'Name',  dataIndex: 'name', width: 100, editable:true},
        { text: 'Email', dataIndex: 'email', width: 230, editable:true },
        { text: 'Phone', dataIndex: 'phone', width: 150, editable:true },
        { text: 'Jurusan', dataIndex: 'jurusan', width: 150, editable:true }
    ],

    // listeners: {
    //     select: 'onItemSelected'
    // }
});
