Ext.define('myapp.view.main.audio', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Audio'
    ],
    xtype:'myaudio1',
    listeners: {
        hide: function () {
            try {
                var video = this.down('audio');
                video.fireEvent('hide');
            }
            catch (e) {
            }
        },
        show: function () {
            try {
                var video = this.down('audio');
                video.fireEvent('show');
            }
            catch (e) {
            }
        }
    },
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
    items: Ext.os.is.Android ? [
        {
            xtype: 'audio',
            cls: 'myAudio',
            url: 'resources/audio/audio.mp3',
            loop: true,
            //width:'200',
            enableControls: true
        },{
            xtype: 'audio',
            cls: 'myAudio',
            url: 'resources/audio/audio.mp3',
            loop: true,
            //width:'200',
            enableControls: true
        },
    ] : [
        {
            xtype: 'audio',
            //cls: 'myAudio',
            url: 'resources/audio/audio.mp3',
            loop: true
        },
        {
            xtype: 'audio',
            //cls: 'myAudio',
            url: 'resources/audio/audio.mp3',
            loop: true
        }
    ]
});