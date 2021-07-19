var awsIot = require('aws-iot-device-sdk');

const dir='test_odessa';
const subscribeDeviceTopic="dev/abs-payment-services/subscribe/ted/"+dir;
const publishDeviceTopic= "dev/abs-payment-services/publish/ted/"+dir+"/";
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

/*let json_={
    type:"sessionCreate",
    data:{
        operation_name:"create_account",
        userId:56
    }
}*/
/*
let json_={
    type:"banksList",
}*/

/*let json_={
    type:"sessionCreate",
    data:{
        operation_name:"transfer",
        userId:56
    }
}*/
/*let json_={
    type:"accountCreate",
    data:{
        session_id:6,
        userId:254
    }
}

/*let json_={
    type:"terminalAdd",
   
}*/

/*let json_={
    type:"accountCredit",
    data:{
        session_id:7,
        accountName:'ABS399534252',
        amount: 30
    }
}*/
/*let json_={
    type:"accountDedit",
    data:{
        session_id:8,
        accountName:'ABS399534252',
        amount: 5
    }
}

/*let json_={
    type:"sessionCreate",
    data:{
        operation_name:"debit",
        userId:254
    }
}*/

/*let json_={
    type:"accountTransfer",
    data:{
        session_id:9,
        accountNameFrom:'ABS399534252',
        accountNameTo:'ABS288316600',
        amount: 5
    }
}*/
/*let json_={
    type:"accountInfo",
    data:{
        accountName:'ABS399534252'
    }
}
/*let json_={
    type:"testEmail",    
}*/

/*let json_={
    type:"accountList",
    data:{
        userId:254
    }
}*/
let json_={
    type:"testSms",
    data:{
    }
}
device.publish(publishDeviceTopic,JSON.stringify(json_),{qos:1},function(err){
    if(err) console.log(err);
    console.log('ggggg');
});


  

