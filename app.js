Ext.Loader.setConfig({
    enabled: true
});

Ext.application({

    controllers: [
        'Tree',
        'Grid'
    ],

    models: [
        'Menu',
        'Grid'
    ],

    stores: [
        'Menus',
        'Grid'
    ],

    views: [
        'MyViewport',
        'MyContainer',
        'MyTreePanel',
        'MyGridPanel'
    ],
    autoCreateViewport: true,
    name: 'MyApp'
});
