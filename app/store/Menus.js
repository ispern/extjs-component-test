/**
 * メニューのストアクラス。
 *
 * @class MyApp.store.Menus
 * @extend Ext.data.TreeStore
 */
Ext.define('MyApp.store.Menus', {

    requires: [
        'MyApp.model.Menu'
    ],

    extend: 'Ext.data.TreeStore',

    model: 'MyApp.model.Menu'
});