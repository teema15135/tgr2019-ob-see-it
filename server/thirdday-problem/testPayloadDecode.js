var pl = '0002019001020064026700ff036872'

let obj = {
    pin: Number('0x' + pl.substr(4, 4)),
    pout: Number('0x' + pl.substr(12, 4)),
    temperature: Number('0x' + pl.substr(20, 4))/10.0,
    humidity: Number('0x' + pl.substr(28, 2)/2)
}
'00 02 0190, 01 02 0064, 02 67 00ff, 03 68 72'
console.log(obj);