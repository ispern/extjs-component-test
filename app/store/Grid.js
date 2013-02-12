/**
 * Gridモデルのストアクラス。
 *
 * @class MyApp.store.Grid
 * @extend Ext.data.Store
 */
Ext.define('MyApp.store.Grid', {

    requires: [
        ''
    ],

    extend: 'Ext.data.Store',

    model: 'MyApp.model.Grid'
});