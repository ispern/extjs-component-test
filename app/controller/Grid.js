/**
 *
 *
 * @class MyApp.controller.Grid
 * @extend Ext.app.Controller
 */
Ext.define('MyApp.controller.Grid', {

    requires: [
        ''
    ],

    extend: 'Ext.app.Controller',

    refs: [
        {
            selector: 'mytreepanel',
            ref: 'tree'
        },
        {
            selector: 'mygridpanel',
            ref: 'grid'
        }
    ],

    init: function() {

        var me = this;

        me.control({
            'mytreepanel': {
                select: me.show
            }
        });
    },

    show: function(tree, record) {

        var me = this,
            store = me.getGrid().getStore(),
            url;

        switch(record.getId()) {
            case 1:
                url = '/data/grid1.json';
                break;
            case 2:
                url = '/data/grid2.json';
                break;
            case 3:
                url = '/data/grid3.json';
                break;

        }

        store.getProxy().url = url;
        store.load();
    }
});