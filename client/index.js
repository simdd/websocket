const socket = new WebSocket('ws://localhost:4321');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');

    setInterval(function(){
        socket.send('Hello Server!');
    }, 1000)
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});