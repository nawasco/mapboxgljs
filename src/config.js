const version = 0.2;

module.exports = {
    accessToken : process.env.ACCESSTOKEN,
    // change attribution to yours
    attribution : '©Nanyuki Water and Serwerage Co., Ltd.',
    // change stylefiles URLs to yours
    styles : [
        { title: 'Street(water)', uri: `https://nawasco.github.io/mapbox-stylefiles/street/style.json?version=${version}`,}, 
        { title: 'Satellite(water)', uri: `https://nawasco.github.io/mapbox-stylefiles/satellite/style.json?version=${version}`,},
        { title: 'Street(sewer)', uri: `https://nawasco.github.io/mapbox-stylefiles/street/style_sewer.json?version=${version}`,}, 
        { title: 'Satellite(sewer)', uri: `https://nawasco.github.io/mapbox-stylefiles/satellite/style_sewer.json?version=${version}`,},
        { title: 'UN Vector Tile', uri: `https://nawasco.github.io/mapbox-stylefiles/unvt/style.json?version=${version}`,},
    ],
    // change initial location and zoom level to yours
    center: [37.119039,-0.024493],
    zoom: 13,
    // you can put your geojson file for searching functions
    search:{
        url: 'https://nawasco.github.io/vt/meter.geojson',
        target: ['accountno', 'serialno'],
        format: (p) => {return `A/C: ${p.accountno}, S/N: ${p.serial_no}, ${p.category}`},
        place_type: ['meter'],
        placeholder: 'Account No or S/N',
        zoom: 16,
    },
    // please specify layers' name for showing popup with attributes table.
    popup: {
        target: [
            'pipeline',
            'sewerline',
            'meter',
            'kiosks',
            'borehole',
            'tank',
            'booster-pump',
            'chambers',
            'manholes',
        ]
    },
    // please specify your covered area if you have multipul locations to do waterworks
    // areaSwitcher: {
    //     areas : [
    //         {title: 'Narok',latlng: [35.87063, -1.08551],zoom: 14,}, 
    //         {title: "Ololulung'a",latlng: [35.65072, -1.0085],zoom: 13}, 
    //         {title: "Kilgoris",latlng: [34.87533, -1.00278],zoom: 14}, 
    //         {title: "Suswa",latlng: [36.33078, -1.05307],zoom: 13}
    //     ]
    // },
    // please specify layer name for showing in legend panel.
    legend:{
        targets:{
            'cadastral': 'Cadastral',
            'cadastral-annotation': 'Cadastral Label',
            'blocks': 'Blocks',
            'blocks-annotation': 'Blocks Label',
            'waterworks': 'Waterworks',
            'pipeline': 'Pipeline',
            'pipeline_annotation': 'Pipeline Label',
            'sewerline' : 'Sewer Pipeline',
            'sewerline_annotation': 'Sewer Pipeline Label',
            'meter': 'Consumer Meter',
            'kiosks': 'Water Kiosk',
            'borehole': 'Borehole',
            'tank': 'Tank',
            'booster-pump' : 'Booster Pump',
            'chambers': 'Chamber',
            'manholes': 'Manhole'
        },
        options: {
            showDefault:false,
            showCheckbox:true,
            reverseOrder:true,
            onlyRendered:true
        }
    }
}