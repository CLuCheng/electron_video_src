// 无边框窗口和透明窗口

const {app,BrowserWindow} = require('electron');
function createWindow() {
    win = new BrowserWindow({show:false});

    win.loadFile('index.html');

    // ready-to-show
    win.on('ready-to-show',()=>{
       win.show();
    });

    win.on('closed',()=> {
        console.log('closed');
        win = null;
    });
}

app.on('ready',createWindow);
app.on('window-all-closed',()=>{
    console.log('window-all-closed');
    if(process.platform != 'darwin') {
      app.quit();
    }
});

app.on('activate',() =>{
    console.log('activate');
    if(win == null) {
        createWindow();
    }
})

