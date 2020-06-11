
var OV = new OpenVidu();
var session = OV.initSession();

session.on('streaCreated',event => {
    session.subscribe(event.stream,"subscribers");
})

session.connect(TOKEN).then(()=>{
    var publisher = OV.initPublisher("publisher");
    session.publish(publisher);
}).catch(error => {
    console.log("Error connecting to the session",error.code, error.message);
});