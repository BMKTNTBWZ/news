const express = require("express")
const router = express.Router()
const url = require("url")
const banner = require("./data/banner.js")
const course = require("./data/course.js")
const nav = require("./data/nav.js")
const recommend = require("./data/recommend.js")
const specific = require("./data/specific.js")
const detail_4 = require("./data/detail_4.js")
const detail_9 = require("./data/detail_9.js")
const detail_10 = require("./data/detail_10.js")
const detail_16 = require("./data/detail_16.js")
const detail_17 = require("./data/detail_17.js")
const detail_18 = require("./data/detail_18.js")
const detail_20 = require("./data/detail_20.js")
const detail_29 = require("./data/detail_29.js")
const detail_31 = require("./data/detail_31.js")
const detail_33 = require("./data/detail_33.js")

router.get("/banner", (req, res) => {
    res.send({
        status: 200,
        result: banner
    })
})

router.get("/course", (req, res) => {
    res.send({
        status: 200,
        result: course
    })
})

router.get("/nav", (req, res) => {
    res.send({
        status: 200,
        result: nav
    })
})

router.get("/recommend", (req, res) => {
    res.send({
        status: 200,
        result: recommend
    })
})

router.get("/specific", (req, res) => {
    res.send({
        status: 200,
        result: specific
    })
})

router.get("/detail", (req, res) => {
    const id = url.parse(req.url, true).query.id
    switch (id) {
        case "4":
            res.send({
                status:200,
                result:detail_4
            })
            break;
        case "9":
            res.send({
                status:200,
                result:detail_9
            })
            break;
        case "10":
            res.send({
                status:200,
                result:detail_10
            })
            break;
        case "16":
            res.send({
                status:200,
                result:detail_16
            })
            break;
        case "17":
            res.send({
                status:200,
                result:detail_17
            })
            break;
        case "18":
            res.send({
                status:200,
                result:detail_18
            })
            break;
        case "20":
            res.send({
                status:200,
                result:detail_20
            })
            break;
        case "29":
            res.send({
                status:200,
                result:detail_29
            })
            break;
        case "31":
            res.send({
                status:200,
                result:detail_31
            })
            break;
        case "33":
            res.send({
                status:200,
                result:detail_33
            })
            break;
        default:
            res.send({
                status:500,
                msg:"暂无数据"
            })
            break;
    }
})


module.exports = router;