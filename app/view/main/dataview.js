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
                    }
                ]
            },
            xtype: 'dataview',
            scrollable: 'y',
            cls: 'dataview-basic',
            itemTpl: '<div class="card" style="width:300px">' +
            '<img class="card-img-top" style="width:30% height:auto" src="{gambar}">' +
            '<div class="card-body">' +
            '<h2 class="card-title">Nama: {name}</h2>' +
            '<p class="card-text">Email: {email}</p>' + 
            '<p class="card-text">Phone: {phone}</p><br>' +
            '<button class="btn btn-primary">Detail</button>' +
            '</div>' +
            '</div><br>',
            bind:{
                store: '{personnel}'
            }
        }],
    }],
    listeners: {
         element: 'element',
         delegate: '.btn',
         bind:'{record}',
        Click: function (out, values, parent, xindex, xcount, xkey) {
             Ext.Msg.alert('Detail','ini adalah detail', Ext.emptyFn);
        },
    }
});