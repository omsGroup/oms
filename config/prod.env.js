'use strict'
const buildtype=process.argv.slice(2)[0]
var obj={
    NODE_ENV: '"production"'
}
switch (buildtype){
    case 'prod':
        process.env.srconfig='prod'
        obj.srconfig='prod'
        break;
    case 'test':
        process.env.srconfig='test'
        obj.srconfig='test'
        break;
    case 'develop':
        process.env.srconfig='develop'
        obj.srconfig='develop'
        break;
    default:
        process.env.srconfig=''
        obj.srconfig=''
        break;
}

module.exports = obj
