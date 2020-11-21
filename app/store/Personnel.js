Ext.define('myapp.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    storeId: 'personnel',
    autoLoad: true,
    autoSync: true,

    model: 'MyApp.model.Personnel',
    
    proxy: {
        type: 'jsonp',
        api: {
            read    : "http://localhost/MyApp_php/personnel.php",
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error',
            url: 'simpsons'
        }        
    }
});