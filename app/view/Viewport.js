Ext.define('MyApp.view.Viewport', {

    extend: 'Ext.Viewport',

    requires: [
        'MyApp.view.MyHeader',
        'MyApp.view.MyTreePanel',
        'MyApp.view.MyGridPanel'
    ],

    renderTo: Ext.getBody(),

    layout: {
        type: 'border'
    },

    initComponent: function() {

        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype : 'myheader',
                    region: 'north'
                },
                {
                    xtype : 'mytreepanel',
                    region: 'west'
                },
                {
                    xtype : 'mygridpanel',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }
});