/**
 * メニューのモデルクラス。
 *
 * @class MyApp.model.Menu
 * @extend Ext.data.Model
 */
Ext.define('MyApp.model.Menu', {

    requires: [
        ''
    ],

    extend: 'Ext.data.Model',

    fields: [
        'text'
    ],

    proxy: {
        type: 'ajax',
        url: './test/ct/mytreepanel/menu.json',
        reader: {
            'type': 'json',
            'root': 'items'
        }
    }
});