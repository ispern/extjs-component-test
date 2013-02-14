/**
 * メインコントローラクラス
 *
 * @class MyApp.controller.Main
 * @extend Ext.app.Controller
 */
Ext.define('MyApp.controller.Main', {

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

    /**
     * 初期処理
     */
    init: function() {

        var me = this;

        me.control({
            'mytreepanel': {
                select: me.doGridLoad
            }
        });
    },

    /**
     * MyTreePanelのselectイベントのハンドラーメソッド。
     *
     * MyGridPanelのdoLoadイベントを発火する。
     *
     * @param tree MyApp.view.MyTreePanel
     * @param record 選択したメニュー
     */
    doGridLoad: function(tree, record) {

        var me = this;

        me.getGrid().fireEvent('doLoad', record.getId());
    }
});