const { createLogger, transports, format } = require("winston")
const { combine, timestamp, label, json, simple, printf, colorize } = format

const printLogFormat =  combine(
    lable({
        lable: "log"
    }),
    colorize(),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd",
    }),
    printf(({timestamp, level, message}) => {
        return `${timestamp} :: [${lable}] ${level} :: ${message} `
    })
)


const logger = createLogger({
    transports : [
        new transports.Console({
            level: "info",
            format: printLogFormat,
        })
    ]
})

module.exports = logger