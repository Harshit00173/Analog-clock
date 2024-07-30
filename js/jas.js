// console.log("Clock");

setInterval(() => {

    d =new Date();
    htime=d.getHours();
    // console.log(htime);
    mtime=d.getMinutes();
    // console.log(mtime);
    stime=d.getSeconds();
    // console.log(stime);


    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hours.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
    
    
}, 1000);