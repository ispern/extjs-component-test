describe('MyGridPanelコンポーネントのテスト', function() {

    var requests = [],
        xhr,
        gridPanel;

    beforeEach(function() {
        gridPanel = Ext.ComponentQuery.query('.mygridpanel')[0];

        xhr = sinon.useFakeXMLHttpRequest();
        xhr.onCreate = function(xhr) {
            requests.push(xhr);
        };
    });

    afterEach(function() {
        xhr.restore();
        requests = [];
    });

    it('doLoadイベントでグリッドパネルが正常にロードされるかどうかの確認', function() {

        expect(MyApp.view.MyGridPanel).toBeDefined();

        gridPanel.fireEvent('doLoad', 1);
        requests[0].respond(200, {"Content-Type": "application/json"}, Ext.encode(Grid1Data));

        expect(gridPanel.getStore().getCount()).toEqual(5);
    });

});