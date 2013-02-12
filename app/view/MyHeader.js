Ext.define('MyApp.view.MyHeader', {

    extend: 'Ext.container.Container',

    alias: 'widget.myheader',

    height: 75,

    html: '<h1>My Application</h1>',

    styleHtmlContent: true,

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});