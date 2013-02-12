Ext.define('MyApp.view.MyTreePanel', {

    extend: 'Ext.tree.Panel',

    alias: 'widget.mytreepanel',

    width: 250,

    title: 'My Tree Panel',

    store: 'Menus',

    style: {
        'border-right': 0
    },

    columns: [
        {
            xtype: 'treecolumn',
            text: 'Name',
            flex: 1,
            dataIndex: 'text'
        }
    ],

    rootVisible: false,

    initComponent: function() {

        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
            }
        });

        me.callParent(arguments);
    }

});