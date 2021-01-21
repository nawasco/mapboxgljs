const version = 0.2;

module.exports = {
    accessToken : process.env.ACCESSTOKEN,
    // change attribution to yours
    attribution : '©Nanyuki Water and Serwerage Co., Ltd.',
    // change stylefiles URLs to yours
    styles : [
       
        { title: 'Satellite(water)', uri: `https://nawasco.github.io/mapbox-stylefiles/satellite/style.json?version=${version}`,},
         { title: 'Street(water)', uri: `https://nawasco.github.io/mapbox-stylefiles/street/style.json?version=${version}`,}, 
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
        format: (p) => {return `A/C: ${p.accountno}, S/N: ${p.serialno}, ${p.category}`},
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
    },
    elevation: {
        url: 'https://nawasco.github.io/ke-central-terrain/tiles/{z}/{x}/{y}.png',
        options: {
            font: ['Roboto Medium'],
            fontSize: 12,
            fontHalo: 1,
            mainColor: '#263238',
            haloColor: '#fff',
        }
    }
}
