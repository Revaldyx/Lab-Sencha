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
            // create  : "http://localhost/MyApp_php/addPersonnel.php",
            update  : "http://localhost/MyApp_php/updatePersonnel.php",
            destroy  : "http://localhost/MyApp_php/removePersonnel.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
        }        
    }
});