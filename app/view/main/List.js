/**
 * This view is an example list of people.
 */
Ext.define('myapp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'myapp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    frame: true,

    columns: [
        {
            text: 'Photo',
            dataIndex: 'gambar',
            width:'300',
            renderer: function(value){
                return '<img src=' + value + ' >';
            },},
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
