/**
 * グリッドパネルのモデルクラス
 *
 * @class MyApp.model.Grid
 * @extend Ext.data.Model
 */
Ext.define('MyApp.model.Grid', {

    requires: [
        ''
    ],

    extend: 'Ext.data.Model',

    fields: [
        {name: 'string', type: 'string'},
        {name: 'number', type: 'int'},
        {name: 'date', type: 'date'},
        {name: 'bool', type: 'bool'}
    ],

    proxy: {
        type: 'ajax',
        url: '/data/grid1.json',
        reader: {
            root: 'items'
        }
    }
});