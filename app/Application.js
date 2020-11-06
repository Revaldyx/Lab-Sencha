/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('myapp.Application', {
    extend: 'Ext.app.Application',

    name: 'myapp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {  //launch awal pada saat buka aplikasi
        // var loggedIn;
        // loggedIn = localStorage.getItem("loggedIn"); //ambil session
        
        // if (!loggedIn) {
        //     this.overlay = Ext.Viewport.add({ //menambahan viewport
        //         xtype: 'login',
        //         floated: true,
        //         showAnimation: {
        //             type: 'popIn',
        //             duration: 250,
        //             easing: 'ease-out'
        //         },
        //         hideAnimation: {
        //             type: 'popOut',
        //             duration: 250,
        //             easing: 'ease-out'
        //         },
        //         width: "100%",
        //         height: "100%",
        //         scrollable: true
        //     });
        // }
        // this.overlay.show();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
