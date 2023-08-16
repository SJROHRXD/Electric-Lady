const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${window.electronAPI.chrome()}), Node.js (v${window.electronAPI.node()}), and Electron (v${window.electronAPI.electron()}).`;

const func = async () => {
    const response = await window.electronAPI.ping();
    console.log(response);
};

func();



console.log(`Node version: ${window.electronAPI.node()}`);
console.log(`Chrome version: ${window.electronAPI.chrome()}`);
console.log(`Electron version: ${window.electronAPI.electron()}`);

window.electronAPI.send('some-channel', 'some-data');

const subscription = window.electronAPI.on('some-channel', (data) => {
    console.log(data);
});

// When done listening to this event
// subscription.unsubscribe();