var awsIot = require('aws-iot-device-sdk');

const dir='test_odessa';
const subscribeDeviceTopic="dev/abs-payment-services/subscribe/ted/"+dir;
const publishDeviceTopic= "/dev/abs-payment-services/publish/ted/"+dir+"/";
var device = awsIot.device({
    keyPath: `keys/${dir}/private.pem.key`,// закрытый ключ устройства
    caPath: 'keys/rootCA.pem',// CA сертификат
    certPath: `keys/${dir}/pem.crt`,// сертификат    
    host: "a3nnnc570kb3d-ats.iot.eu-central-1.amazonaws.com",
    clientId: dir,
    debug:true,
    region: 'eu-central-1'
});
 device.on('connect', function(err) {//
    if(err) console.error(err);
    console.log('connect5555');  
    device.subscribe(subscribeDeviceTopic);    
});

device.on('message', function(topic, payload) {
    console.log('messagerrr', topic, payload.toString()); 

});
device.publish(publishDeviceTopic,JSON.stringify({ type: 'terminalSettings'}),{qos:0},function(err){
    if(err) console.log(err);
    console.log('ggggg');
});


  

