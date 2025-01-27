const os = require('os');

setInterval(() => {
    const {arch, platform, totalmem, freemem} = os;
    const Tram = totalmem() / 1024 / 1024;
    const Fram = freemem() /1024 / 1024;
    const Usage = (Fram / Tram) * 100;
    
    const status = {
    
            OS:platform(),
            Arch:arch(),
            TotalRam: `${parseInt(Tram)} MB` ,
            FreeRam:`${parseInt(Fram)} MB`,
            Usage: `${Usage.toFixed(2)}%`
    };
    console.clear();
    console.table(status);
    exports.stats = status;
     
},1000) ;

