Ext.define('myapp.view.main.dataview', {
    xtype:'bdv',
    
    extend: 'Ext.Container',

    requires: [
    'Ext.dataview.plugin.ItemTip',
    'Ext.plugin.Responsive',
    'myapp.store.Personnel'
    ],

    controller: 'main',
    viewModel: 'main',

    width:'auto',
    height:'auto',
    //align:'center',

    layout: 'fit',
    cls: 'ks-basic demo-solid-background',
    shadow: true,
    viewModel:{
        stores:{
            personnel: {
                type:'personnel'
            }
        }
    },
    
    items:[{
        title:'Data Karyawan',
        xtype: 'panel',
        scrollable: 'y',
        items: [{
            items : {
                docked :'top',
                    xtype: 'toolbar',
                    items: [
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Cari Berdasarkan Nama',
                        name: 'searchfield',
                        id: 'search',
                        listeners: {
                            change: 'onInputChange'
                        }
                    },{
                        xtype:'spacer'
                    }
                ]
            },
            xtype: 'dataview',
            scrollable: 'y',
            cls: 'dataview-basic',
            id:'bdv',
            itemTpl: 
            '<br><center>'+
            '<div class="card" style="width:300px">' +
            '<img class="card-img-top" style="width:30% height:auto" src="/resources/{gambar}">' +
            '<div class="card-body">' +
            '<h2 class="card-title">Nama: {name}</h2>' +
            '<p class="card-text">Email: {email}</p>' + 
            '<p class="card-text">Phone: {phone}</p><br>' +
            '<button type="button" class="btn btn-primary" onclick="onRemoveClick({user_id})">Delete</button>&nbsp' +
            '<button type="button" class="btn btn-primary" onclick="onUpdateClick({user_id})">Edit</button>' +
            '</div>' +
            '</div><br>',
            bind:{
                store: '{personnel}'
            }
        }],
    }],
});