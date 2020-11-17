Ext.define('myapp.view.main.video', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Video'
    ],
    xtype:'myvideo',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    shadow: true,
    listeners: {
        hide: function () {
            try {
                var video = this.down('video');
                video.fireEvent('hide');
            }
            catch (e) {
            }
        },
        show: function () {
            try {
                var video = this.down('video');
                video.fireEvent('show');
            }
            catch (e) {
            }
        }
    },
    items: [{
        xtype: 'video',
        url: 'resources/video/video.mp4',
        loop: true,
        width:300,
        height:300,
        posterUrl: 'resources/video/cover.jpeg'
    }]
});