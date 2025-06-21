var wms_layers = [];


        var lyr_SATELITDANLABEL_0 = new ol.layer.Tile({
            'title': 'SATELIT DAN LABEL',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GAMBARSATELIT_1 = new ol.layer.Tile({
            'title': 'GAMBAR SATELIT',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_KECKARANGTENGAHPINANG_2 = new ol.format.GeoJSON();
var features_KECKARANGTENGAHPINANG_2 = format_KECKARANGTENGAHPINANG_2.readFeatures(json_KECKARANGTENGAHPINANG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECKARANGTENGAHPINANG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECKARANGTENGAHPINANG_2.addFeatures(features_KECKARANGTENGAHPINANG_2);
var lyr_KECKARANGTENGAHPINANG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECKARANGTENGAHPINANG_2, 
                style: style_KECKARANGTENGAHPINANG_2,
                popuplayertitle: "KEC. KARANGTENGAH PINANG",
                interactive: false,
                title: '<img src="styles/legend/KECKARANGTENGAHPINANG_2.png" /> KEC. KARANGTENGAH PINANG'
            });
var format_KECCIBODAS_3 = new ol.format.GeoJSON();
var features_KECCIBODAS_3 = format_KECCIBODAS_3.readFeatures(json_KECCIBODAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECCIBODAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECCIBODAS_3.addFeatures(features_KECCIBODAS_3);
var lyr_KECCIBODAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECCIBODAS_3, 
                style: style_KECCIBODAS_3,
                popuplayertitle: "KEC. CIBODAS",
                interactive: false,
                title: '<img src="styles/legend/KECCIBODAS_3.png" /> KEC. CIBODAS'
            });
var format_KECKARAWACI_4 = new ol.format.GeoJSON();
var features_KECKARAWACI_4 = format_KECKARAWACI_4.readFeatures(json_KECKARAWACI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECKARAWACI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECKARAWACI_4.addFeatures(features_KECKARAWACI_4);
var lyr_KECKARAWACI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECKARAWACI_4, 
                style: style_KECKARAWACI_4,
                popuplayertitle: "KEC. KARAWACI",
                interactive: true,
                title: '<img src="styles/legend/KECKARAWACI_4.png" /> KEC. KARAWACI'
            });
var format_PELANGGAN_KARAWACI_5 = new ol.format.GeoJSON();
var features_PELANGGAN_KARAWACI_5 = format_PELANGGAN_KARAWACI_5.readFeatures(json_PELANGGAN_KARAWACI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELANGGAN_KARAWACI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELANGGAN_KARAWACI_5.addFeatures(features_PELANGGAN_KARAWACI_5);
var lyr_PELANGGAN_KARAWACI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PELANGGAN_KARAWACI_5, 
                style: style_PELANGGAN_KARAWACI_5,
                popuplayertitle: "PELANGGAN_KARAWACI",
                interactive: false,
                title: '<img src="styles/legend/PELANGGAN_KARAWACI_5.png" /> PELANGGAN_KARAWACI'
            });

lyr_SATELITDANLABEL_0.setVisible(false);lyr_GAMBARSATELIT_1.setVisible(true);lyr_KECKARANGTENGAHPINANG_2.setVisible(false);lyr_KECCIBODAS_3.setVisible(false);lyr_KECKARAWACI_4.setVisible(true);lyr_PELANGGAN_KARAWACI_5.setVisible(false);
var layersList = [lyr_SATELITDANLABEL_0,lyr_GAMBARSATELIT_1,lyr_KECKARANGTENGAHPINANG_2,lyr_KECCIBODAS_3,lyr_KECKARAWACI_4,lyr_PELANGGAN_KARAWACI_5];
lyr_KECKARANGTENGAHPINANG_2.set('fieldAliases', {'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'rw': 'rw', 'kode_area': 'kode_area', });
lyr_KECCIBODAS_3.set('fieldAliases', {'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'rw': 'rw', 'kode_area': 'kode_area', });
lyr_KECKARAWACI_4.set('fieldAliases', {'wadmkc': 'Kercamatan', 'wadmkd': 'kelurahan', 'rw': 'rw', 'kode_area': 'kode area', });
lyr_PELANGGAN_KARAWACI_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nosamb': 'nosamb', 'cust_code': 'cust_code', 'nama': 'nama', 'alamat': 'alamat', 'tgl_pasang': 'tgl_pasang', 'kodegol': 'kodegol', 'nama_gol': 'nama_gol', 'koderayon': 'koderayon', 'nama_rayon': 'nama_rayon', 'kelurahan': 'kelurahan', 'merk_meter': 'merk_meter', 'serimeter': 'serimeter', 'latitude': 'latitude', 'longitude': 'longitude', 'norek_lama': 'norek_lama', });
lyr_KECKARANGTENGAHPINANG_2.set('fieldImages', {'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'rw': 'TextEdit', 'kode_area': 'TextEdit', });
lyr_KECCIBODAS_3.set('fieldImages', {'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'rw': 'TextEdit', 'kode_area': 'TextEdit', });
lyr_KECKARAWACI_4.set('fieldImages', {'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'rw': 'TextEdit', 'kode_area': 'TextEdit', });
lyr_PELANGGAN_KARAWACI_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'nosamb': 'TextEdit', 'cust_code': 'TextEdit', 'nama': 'TextEdit', 'alamat': 'TextEdit', 'tgl_pasang': 'TextEdit', 'kodegol': 'TextEdit', 'nama_gol': 'TextEdit', 'koderayon': 'TextEdit', 'nama_rayon': 'TextEdit', 'kelurahan': 'TextEdit', 'merk_meter': 'TextEdit', 'serimeter': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'norek_lama': 'TextEdit', });
lyr_KECKARANGTENGAHPINANG_2.set('fieldLabels', {'wadmkc': 'no label', 'wadmkd': 'no label', 'rw': 'no label', 'kode_area': 'no label', });
lyr_KECCIBODAS_3.set('fieldLabels', {'wadmkc': 'no label', 'wadmkd': 'no label', 'rw': 'no label', 'kode_area': 'no label', });
lyr_KECKARAWACI_4.set('fieldLabels', {'wadmkc': 'inline label - always visible', 'wadmkd': 'inline label - always visible', 'rw': 'inline label - always visible', 'kode_area': 'inline label - always visible', });
lyr_PELANGGAN_KARAWACI_5.set('fieldLabels', {'OBJECTID': 'no label', 'nosamb': 'no label', 'cust_code': 'no label', 'nama': 'no label', 'alamat': 'no label', 'tgl_pasang': 'no label', 'kodegol': 'no label', 'nama_gol': 'no label', 'koderayon': 'no label', 'nama_rayon': 'no label', 'kelurahan': 'no label', 'merk_meter': 'no label', 'serimeter': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'norek_lama': 'no label', });
lyr_PELANGGAN_KARAWACI_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});