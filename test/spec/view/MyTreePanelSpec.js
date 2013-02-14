describe('Test MyTreePanel Component.', function() {

    var requests = [],
        xhr,
        treePanel;

    beforeEach(function() {
        treePanel = Ext.ComponentQuery.query('.mytreepanel')[0];

        xhr = sinon.useFakeXMLHttpRequest();
        xhr.onCreate = function(xhr) {
            requests.push(xhr);
        };

        treePanel.getStore().load();
        requests[0].respond(200, {"Content-Type": "application/json"}, Ext.encode(MenuData));
    });

    afterEach(function() {
        xhr.restore();
        requests = [];
    });

    it('has MyTreePanel Loaded.', function() {

        expect(MyApp.view.MyTreePanel).toBeDefined();

        var fn = jasmine.createSpy('doLoadGrid');
        treePanel.on('doLoadGrid', fn);

        treePanel.fireEvent('select');

        expect(fn).toHaveBeenCalled();
        expect(treePanel.getStore().getRootNode().childNodes.length).toEqual(3);
    });

});