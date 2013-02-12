Ext.Loader.setConfig({
    enabled: true
});

Ext.application({

    controllers: [
        'Tree'
    ],

    models: [
        'Menu'
    ],

    stores: [
        'Menus'
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
