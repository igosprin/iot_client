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
    region: 'eu-central-1',
    offlineQueueing: false
});
 


/*let json_={
    type:"userCreate",
    data:{
        "email": "baresfords@test.com","first_name": "Tutoh","last_name": "Baresfords","phone_number": "+421111867321","document_personal_id": "JK098898"
    }
}*/
/*let json_={
    type:"sessionCreate",
    data:{
        operation_name:"debit",
        userId:3
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
        userId:3
    }
}*/
/*let json_={
    type:"accountCreate",
    data:{
        session_id:41,
        userId:3
    }
}*/

/*let json_={
    type:"terminalAdd",
   
}*/

let json_={
    type:"accountCredit",
    data:{
        session_id:145,
        accountName:'ABS761129774',
        amount: 10
    }
}
/*let json_={
    type:"accountDebit",
    data:{
        session_id:144,
        accountName:'ABS761129774',
        amount: 20
    }
}*/

/*let json_={
    type:"sessionCreate",
    data:{
        operation_name:"transfer",
        userId:1
    }
}*/

/*let json_={
    type:"accountTransfer",
    data:{
        session_id:150,
        accountNameFrom:'ABS761129774',
        accountNameTo:'ABS751500868',
        amount: 1500
    }
}*/
/*let json_={
    type:"accountInfo",
    data:{
        accountName:'ABS761129774'
    }
}*/
/*let json_={
    type:"testEmail",    
}*/

/*let json_={
    type:"accountList",
    data:{
        userId:3
    }
}*/

/*let json_={
    type:"sendCodeSms",
    data:{
        phone_number:'+421777777999',
    }
}*/
/*let json_={
    type:"checkedCodeSms",
    data:{
        phone_number:'+421777777999',
        code: '1111'
    }
}*/
/*let json_={
    type:"testEmail",    
}*/
/*let json_={
    type:"userFind",
    data:{
        document_personal_id:'JJ071831'
    }
}*/
/*let json_={
    type:"testCreateWallet",
    data:{
    }
}
*/
/*let json_={
    type:"testUpdateWallet",
    data:{
        address:'0x67c1da7222c1eaeb8c59d8be730e018962ea81ab', balance_token:2.00, balance_token_current:2.00
    }
}*/
/*let json_={
    type:"testInfoWallet",
    data:{
        address:'0x95e81e464f061d3a70df21dba4697d2735bfff57'
    }
}
/*
let json_={
    type:"testCreditWallet",
    data:{
        address:'0xa708e750b729f288fdda7dd13d06807c1f823109',
        amount: 10
    }
}*/
/*let json_={
    type:"testDebitWallet",
    data:{
        address:'0xa708e750b729f288fdda7dd13d06807c1f823109',
        amount: 5
    }
}*/
/*let json_={
    type:"testTransferWallet",
    data:{
        address_from: 1,
        address_to: 3,
        amount: 5
    }
}*/
/*let json_={
    type:"terminalAdd",
    name:'8977462DF45DC53A2918E3461527AF66'   
}*/
device.on('connect', function(err) {//
    if(err) console.error(err);
    console.log('connect');  

    device.subscribe(subscribeDeviceTopic);  
    device.publish(publishDeviceTopic,JSON.stringify(json_),{qos:0},function(err){
        if(err) console.log(err);
        console.log('send: ');
    });
      
});

device.on('message', function(topic, payload) {
    console.log('message: ', topic, payload.toString()); 

});



  

