Ext.require([
    'Ext.container.Viewport', // sử dụng để tạo ra một khu vực hiển thị chính cho ứng dụng web.
    'GeoExt.slider.Tip', //  sử dụng để tạo một thông báo gợi ý (tooltip) cho các giá trị trên thanh trượt (slider) trong bản đồ.
    'GeoExt.slider.Zoom',// sử dụng để phóng to thu nhỏ trong bản đồ
    'gxp.Viewer', //hiển thị và tương tác với các tệp dữ liệu trên trình duyệt web
    'gxp.plugins.OLSource', //được sử dụng để thêm các lớp bản đồ từ các nguồn dữ liệu khác nhau vào ứng dụng bản đồ.
    'gxp.plugins.WMSSource',// hỗ trợ hiển thị dữ liệu bản đồ từ các nguồn dữ liệu địa lý thông qua giao thức WMS (Web Map Service).
    'gxp.plugins.WMSCSource', //hỗ trợ việc chia sẻ dữ liệu bản đồ giữa các cộng đồng người dùng
    'gxp.plugins.WMSGetFeatureInfo', //hỗ trợ truy xuất thông tin chi tiết của đối tượng trên bản đồ thông qua giao thức WMS (Web Map Service).
    'gxp.plugins.LayerTree', // hỗ trợ tạo cây lớp dữ liệu và hiển thị chúng trong bản đồ
    'gxp.plugins.ZoomToExtent', // hỗ trợ người dùng phóng to hoặc thu nhỏ bản đồ đến một phạm vi cụ thể
    'gxp.plugins.ZoomToLayerExtent', //hỗ trợ người dùng phóng to hoặc thu nhỏ bản đồ đến phạm vi của một lớp dữ liệu cụ thể
    'gxp.plugins.Navigation', // hỗ trợ người dùng điều hướng trên bản đồ. Khi được kích hoạt, plugin sẽ tạo ra các nút điều hướng, cho phép người dùng di chuyển và phóng to/thu nhỏ bản đồ.
    'gxp.plugins.NavigationHistory', // hỗ trợ quản lý lịch sử điều hướng trên bản đồ
    'gxp.plugins.Zoom',// hỗ trợ người dùng phóng to và thu nhỏ bản đồ
    'gxp.plugins.MapQuestSource',// sử dụng dịch vụ bản đồ của MapQuest như một nguồn dữ liệu bản đồ cho ứng dụng bản đồ
    'gxp.plugins.BingSource',// hỗ trợ người dùng sử dụng dịch vụ bản đồ của Bing Maps như một nguồn dữ liệu bản đồ cho ứng dụng bản đồ
    'gxp.plugins.GoogleSource', // hỗ trợ người dùng sử dụng dịch vụ bản đồ của Google Maps như một nguồn dữ liệu bản đồ cho ứng dụng bản đồ
    'gxp.plugins.OSMSource', // hỗ trợ người dùng sử dụng dịch vụ bản đồ của Open Street Maps như một nguồn dữ liệu bản đồ cho ứng dụng bản đồ
    'gxp.plugins.MapBoxSource',// hỗ trợ người dùng sử dụng dịch vụ bản đồ của  MapBox như một nguồn dữ liệu bản đồ cho ứng dụng bản đồ
    'gxp.plugins.FeatureManager',// hỗ trợ việc quản lý các đối tượng địa lý trên bản đồ
    'gxp.plugins.QueryForm', // hỗ trợ tạo một biểu mẫu truy vấn đến các lớp địa lý trên bản đồ
    'gxp.plugins.FeatureGrid', // hiển thị dữ liệu địa lý của một bảng lên trang web
    'gxp.plugins.LayerProperties',// hiển thị các thuộc tính và cấu hình của một lớp dữ liệu địa lý trên bản đổ
    'gxp.panel.ScaleOverlay', // hiển thị thông tin về tỉ lệ và khoảng cách trên bản đồ
    'gxp.container.WMSStylesDialog',// hiển thị danh sách các kiểu dáng (styles) có sẵn cho một lớp dữ liệu địa lý trên Geoserver.
    'gxp.plugins.CSWCatalogueSource',// sử dụng để kết nối với các hệ thống quản lý thông tin địa lý
    'gxp.tab.CrumbPanel',// hiển thị lịch sử đường dẫn truy cập của người dùng trong ứng dụng web địa lý
    'gxp.plugins.AddLayers', // thêm plugin AddLayers
    
]);

Ext.application({
    name: 'Viewer',
    launch: function () {
        window.app = Ext.create('gxp.Viewer', {
            proxy: "proxy.cgi?url=",
            portalItems: [{
                region: 'center',
                layout: 'border',
                //tbar: {id: 'paneltbar'},
                items: ['mymap', {
                    region: 'west',
                    xtype: 'gxp_crumbpanel',
                    id: 'tree',
                    layout: 'fit',
                    split: true,
                    width: 320
                }, {
                        region: "south",
                        id: "south",
                        height: 220,
                        border: false,
                        split: true,
                        collapsible: true,
                        collapseMode: "mini",
                        collapsed: true,
                        hideCollapseTool: true,
                        header: false,
                        layout: "border",
                        items: [{
                            region: "center",
                            id: "table",
                            title: "Table",
                            layout: "fit"
                        },
                         {
                            region: "west",
                            width: 320,
                            id: "query",
                            title: "Query",
                            split: true,
                            collapsible: true,
                            collapseMode: "mini",
                            collapsed: true,
                            hideCollapseTool: true,
                            layout: "fit"
                        }]
                    },
                     {
                        region: "east",
                        title: "Locate",
                        border: false,
                        split: true,
                        collapsible: true,
                        collapseMode: "mini",
                        collapsed: true,
                        hideCollapseTool: true,
                        width: 320,
                        items: []
                    }]
            }],
            tools: [{
                ptype: "gxp_featuremanager",
                id: "querymanager",
                selectStyle: { cursor: '' },
                autoLoadFeatures: true,
                maxFeatures: 50,
                paging: true,
                pagingType: gxp.plugins.FeatureManager.WFS_PAGING
            }, {
                ptype: "gxp_featuregrid",
                featureManager: "querymanager",
                showTotalResults: true,
                autoLoadFeature: false,
                alwaysDisplayOnMap: true,
                controlOptions: { multiple: true },
                displayMode: "selected",
                outputTarget: "table",
                outputConfig: {
                    id: "featuregrid",
                    columnsSortable: false
                }
            },
             {
                ptype: "gxp_layertree",
                outputConfig: {
                    id: "layers",
                    title: "Layers",
                    autoScroll: true,
                    border: true,
                    tbar: [], // we will add buttons to "tree.bbar" later
                },
                outputTarget: "tree"
            }, 
            {
                ptype: "gxp_layerproperties",
                id: "layerproperties",
                outputConfig: { defaults: { autoScroll: true }, width: 320 },
                actionTarget: ["layers.tbar", "layers.contextMenu"],
                outputTarget: "tree"
            }
            , {
                ptype: "gxp_zoomtolayerextent",
                actionTarget: ["layers.contextMenu"]
            }, {
                ptype: "gxp_navigation",
                toggleGroup: "navigation"
            }, 
            {
                ptype: "gxp_zoom",
                showZoomBoxAction: true,
                controlOptions: { zoomOnClick: false },
                toggleGroup: "navigation",
            }, {
                ptype: "gxp_navigationhistory",
                actionTarget: "map.tbar",
                toggleGroup: "navigation"
            }, {
                ptype: "gxp_zoomtoextent",
                actionTarget: "map.tbar",
                toggleGroup: "navigation"
            },  
            {
                ptype: "gxp_queryform",
                showButtonText: false,
                featureManager: "querymanager",
                autoExpand: 'query',
                actionTarget: "map.tbar",
                outputTarget: "query",
            },
        ],
            sources: {
                ol: {
                    ptype: "gxp_olsource",
                },
                local: {
                    ptype: "gxp_wmscsource",
                    url: "http://localhost:8080/geoserver/ne/wms",
                    version: "1.1.1"
                },
                mapquest: {
                    ptype: "gxp_mapquestsource"
                },
                google: {
                    ptype: "gxp_googlesource"
                },
                osm: {
                    ptype: "gxp_osmsource"
                },
                mapbox: {
                    ptype: "gxp_mapboxsource"
                },
            },
            map: {
                id: 'mymap',
                region: 'center',
                title: "Map",
                projection: "EPSG:4326",
                center: [105.80629730224609, 15.88702442578125],
                zoom: 5,
                layers: [                    
                {
                    source: "local",
                    title: "Bản Đồ Việt Nam",
                    name: "ne:gadm41_vnm_1",
                    group: "background",
                    visibility: true,
                    selected: true,
                    bbox: [102.107955932617, 8.30629730224609, 109.505798339844, 23.4677505493164],
                    
                }],
            },
             
        })
    }

});
