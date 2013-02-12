/**
 *
 *
 * @class MyApp.controller.Tree
 * @extend Ext.app.Controller
 */
Ext.define('MyApp.controller.Tree', {

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
                select: me.show
            }
        });
    },

    show: function() {

        var me = this;


    }
});