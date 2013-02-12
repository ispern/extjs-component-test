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
        }
    ],

    init: function() {

        var me = this;

        me.control({
            'mytreepanel': {
                doLoadGrid: me.show
            }
        });
    },

    show: function() {
        console.log('doLoadGrid');
    }
});