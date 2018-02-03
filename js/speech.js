var artyom = new Artyom();

artyom.addCommands([
    {
        indexes: ["Good morning"],
        action: function(i){
            console.log("Good morning Triggered");
        }
    },
    {
        indexes: ["Good night"],
        action: function(i){
            console.log("Good night Triggered");
        }
    }
]);

// Or the artisan mode to write less
artyom.on(["Good morning"]).then(function(i){
    console.log("Triggered");
});

artyom.initialize({
    lang:"en-GB",
    debug:true, // Show what recognizes in the Console
    listen:true, // Start listening after this
    speed:0.9, // Talk a little bit slow
    mode:"normal" // This parameter is not required as it will be normal by default
});
