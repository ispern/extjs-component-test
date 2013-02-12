Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext': '../../ext/src'
    }
});

Ext.application({
    name: 'MyApp',
    appFolder: '../../app',
    requires: ['MyApp.view.MyGridPanel'],
    controllers: ['Grid'],
    models: ['Grid'],
    stores: ['Grid'],
    views: ['MyApp.view.MyGridPanel'],
    autoCreateViewport: false,
    launch: function() {
        var me = this,
            grid;

        Ext.widget('button', {
            renderTo: Ext.getBody(),
            text    : 'Menu1',
            handler : function() {
                grid.getStore().getProxy().url = '../../data/grid1.json';
                grid.getStore().load();
            }
        });
        Ext.widget('button', {
            renderTo: Ext.getBody(),
            text    : 'Menu2',
            handler : function() {
                grid.getStore().getProxy().url = '../../data/grid2.json';
                grid.getStore().load();
            }
        });
        Ext.widget('button', {
            renderTo: Ext.getBody(),
            text    : 'Menu3',
            handler : function() {
                grid.getStore().getProxy().url = '../../data/grid3.json';
                grid.getStore().load();
            }
        });
        grid = Ext.widget('mygridpanel', {
            renderTo: Ext.getBody(),
            height  : 500
        });
    }
});