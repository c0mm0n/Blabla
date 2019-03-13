webpackJsonp([1], {
    BJ9Y: function(t, a) {},
    Kjo3: function(t, a) {},
    NHnr: function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("7+uW")
          , i = e("//Fk")
          , s = e.n(i)
          , o = {
            props: {
                title: {
                    type: String,
                    default: ""
                },
                handleClose: {
                    type: Boolean,
                    default: !1
                },
                width: {
                    type: String,
                    default: "560px"
                },
                center: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    show: !1,
                    cb: null,
                    defaultBtns: []
                }
            },
            methods: {
                open: function() {
                    var t = this;
                    return this.show = !0,
                    this.$emit("open"),
                    {
                        then: function(a) {
                            t.cb = a
                        }
                    }
                },
                btnClick: function(t) {
                    this.cb(t, this)
                },
                close: function() {
                    this.$emit("close"),
                    this.show = !1
                }
            },
            computed: {
                style: function() {
                    var t = {};
                    return t.width = this.width,
                    t
                }
            }
        }
          , l = {
            render: function() {
                var t = this
                  , a = t.$createElement
                  , e = t._self._c || a;
                return e("transition", {
                    attrs: {
                        name: "fade-in"
                    }
                }, [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    staticClass: "b-dialog"
                }, [e("div", {
                    staticClass: "b-dialog-backdrop"
                }), t._v(" "), e("transition", {
                    attrs: {
                        name: "fade-in-top"
                    }
                }, [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    staticClass: "b-dialog-box",
                    class: {
                        center: t.center
                    },
                    style: t.style
                }, [e("div", {
                    staticClass: "b-dialog-box_header"
                }, [e("div", {
                    staticClass: "b-dialog-box_header-title"
                }, [t._v(t._s(t.title))]), t._v(" "), t.handleClose ? e("button", {
                    staticClass: "el-dialog__headerbtn",
                    attrs: {
                        type: "button",
                        "aria-label": "Close"
                    },
                    on: {
                        click: t.close
                    }
                }, [e("i", {
                    staticClass: "el-dialog__close el-icon el-icon-close"
                })]) : t._e()]), t._v(" "), e("div", {
                    staticClass: "b-dialog-box_content"
                }, [t._t("content")], 2), t._v(" "), e("div", {
                    staticClass: "b-dialog-box_footer"
                }, [t.$slots.footer ? t._t("footer") : t._e(), t._v(" "), t.$slots.footer ? t._e() : e("div", {
                    staticClass: "b-dialog-box_footer-btns"
                }, t._l(t.defaultBtns, function(a, n) {
                    return e("div", {
                        key: n,
                        staticClass: "footer-btn",
                        class: [a.type],
                        on: {
                            click: function(a) {
                                return t.btnClick(n)
                            }
                        }
                    }, [t._v(t._s(a.text))])
                }), 0)], 2)])])], 1)])
            },
            staticRenderFns: []
        };
        var c = e("VU/8")(o, l, !1, function(t) {
            e("nOek")
        }, null, null).exports
          , r = e("mtWM")
          , d = e.n(r)
          , v = {
            data: function() {
                return {
                    tab: 0,
                    hasProduct: !1,
                    read1: !1,
                    read2: !1,
                    read3: !1,
                    formData: {
                        baseAsset: "",
                        quoteAsset: "",
                        emailOrPhone: "",
                        code: "",
                        firstName: "",
                        lastName: ""
                    },
                    codeSending: !1,
                    codeTimer: 0,
                    langMap: {
                        "zh-CN": "中文",
                        "en-US": "English"
                    },
                    lang: "en-US",
                    showPrice: !1,
                    started: !1
                }
            },
            mounted: function() {
                this.lang = localStorage.getItem("lang") || "en-US",
                this.checkProduct();
                var t = new Date("2019-3-11 9:30:00");
                t.setMinutes(t.getMinutes() + -480);
                var a = new Date
                  , e = t.getTimezoneOffset();
                a.setMinutes(a.getMinutes() + e),
                a.getTime() >= t.getTime() && (this.showPrice = !0)
            },
            computed: {
                enabled: function() {
                    return this.hasProduct && this.read1 && this.read2 && this.read3 && this.showPrice
                },
                buyBtn: function() {
                    return this.started ? this.hasProduct ? {
                        "zh-CN": "我要参与",
                        "en-US": "Sign Up"
                    }[this.lang] : {
                        "zh-CN": "已售罄",
                        "en-US": "Sold Out"
                    }[this.lang] : {
                        "zh-CN": "未开始",
                        "en-US": "Coming Soon2"
                    }[this.lang]
                }
            },
            methods: {
                openDialog: function() {
                    console.log(this);
                    this.enabled && this.$refs.buyDialog.open()
                },
                changeTab: function(t) {
                    this.tab = t
                },
                checkProduct: function() {
                    this.$refs.buyDialog.open()
                    // console.log(this);
                    var t = this
                      , a = new s.a(function(a, e) {
                        d.a.get("/api/r/v1/presale/status?baseAsset=DOS&quoteAsset=ETH").then(function(n) {
                            n && n.data ? n.data.started ? a({
                                started: !0,
                                avaliable: n.data.avaliable
                            }) : a({
                                started: !1,
                                avaliable: n.data.avaliable
                            }) : (t.$message.error(n.data && n.data.message || "Request Error!"),
                            e())
                        }).catch(function(t) {
                            e(t)
                        })
                    }
                    )
                      , e = new s.a(function(a, e) {
                        d.a.get("/api/r/v1/presale/status?baseAsset=DOS&quoteAsset=BTMX").then(function(n) {
                            n && n.data ? n.data.started ? a({
                                started: !0,
                                avaliable: n.data.avaliable
                            }) : a({
                                started: !1,
                                avaliable: n.data.avaliable
                            }) : (t.$message.error(n.data && n.data.message || "Request Error!"),
                            e())
                        }).catch(function(t) {
                            e(t)
                        })
                    }
                    );
                    s.a.all([a, e]).then(function(a) {
                        a[0].started && a[1].started ? (t.started = !0,
                        a[0].avaliable && a[1].avaliable ? t.hasProduct = !0 : t.hasProduct = !1) : t.started = !1
                    }).catch(function(t) {})
                },
                sendCode: function() {
                    var t = this;
                    this.formData.emailOrPhone ? d.a.post("/api/r/v1/presale/sendcode", {
                        emailOrPhone: this.formData.emailOrPhone
                    }).then(function(a) {
                        t.codeSending = !0,
                        t.codeTimer = 60,
                        t.$message.success("en-US" == t.lang ? "Verifying code send succeed" : "发送邮箱验证码成功");
                        var e = setInterval(function() {
                            t.codeTimer--,
                            0 == t.codeTimer && (clearInterval(e),
                            e = null,
                            t.codeSending = !1)
                        }, 1e3)
                    }) : this.$refs.btmxAccount.focus()
                },
                buy: function() {
                    var t = this;
                    d.a.post("/api/r/v1/presale/register", {
                        baseAsset: "DOS",
                        quoteAsset: this.tab ? "ETH" : "BTMX",
                        emailOrPhone: this.formData.emailOrPhone,
                        code: this.formData.code,
                        firstName: this.formData.firstName,
                        lastName: this.formData.lastName
                    }).then(function(a) {
                        if (a.data && 0 === a.data.code) {
                            t.close();
                            var e = {
                                title: "en-US" == t.lang ? "Promotion Signup Confirmation" : "购买确认",
                                content: "en-US" == t.lang ? "Congratulations! You have successfully signed up for the DOS Promotion!" : "恭喜您DOS预售登记成功！",
                                buttons: [{
                                    text: "en-US" == t.lang ? "OK" : "确定"
                                }]
                            };
                            t.$bConfirm(e).then(function(t) {
                                t.btn;
                                t.instance.close()
                            })
                        } else
                            t.$message.error(a.data && a.data.message || "Request Error!")
                    })
                },
                changeLang: function(t) {
                    this.lang = t,
                    localStorage.setItem("lang", t)
                },
                goto: function(t, a) {
                    window.open(t, a)
                },
                clearData: function() {
                    this.formData = {
                        baseAsset: "",
                        quoteAsset: "",
                        emailOrPhone: "",
                        code: "",
                        firstName: "",
                        lastName: ""
                    },
                    this.tab = 0,
                    this.codeSending = !1,
                    this.codeTimer = 0
                },
                close: function() {
                    this.clearData(),
                    this.$refs.buyDialog.close()
                }
            },
            components: {
                "b-dialog": c
            }
        }
          , u = {
            render: function() {
                var t = this
                  , a = t.$createElement
                  , e = t._self._c || a;
                return e("div", {
                    staticClass: "c-white"
                }, [e("div", {
                    staticClass: "dos-header"
                }, [t._m(0), t._v(" "), e("div", {
                    staticClass: "right-part"
                }, [e("div", {
                    staticClass: "content",
                    on: {
                        click: function(a) {
                            return t.goto("https://dos.network", "_self")
                        }
                    }
                }, [t._v(t._s("en-US" == t.lang ? "Home" : "首页"))]), t._v(" "), e("div", {
                    staticClass: "content cur"
                }, [t._v(t._s("en-US" == t.lang ? "Promotion" : "预售"))]), t._v(" "), e("div", {
                    staticClass: "content"
                }, [e("el-dropdown", {
                    on: {
                        command: t.changeLang
                    }
                }, [e("span", {
                    staticClass: "flex"
                }, [t._v(t._s(t.langMap[t.lang])), e("i", {
                    staticClass: "el-icon-arrow-down el-icon--right"
                })]), t._v(" "), e("el-dropdown-menu", {
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, [e("el-dropdown-item", {
                    attrs: {
                        command: "zh-CN"
                    }
                }, [t._v("中文")]), t._v(" "), e("el-dropdown-item", {
                    attrs: {
                        command: "en-US"
                    }
                }, [t._v("English")])], 1)], 1)], 1)])]), t._v(" "), e("div", {
                    staticClass: "bg"
                }, [e("div", {
                    staticClass: "dos-banner",
                    class: {
                        en: "en-US" == t.lang
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "mid-part col"
                }, [e("div", {
                    staticClass: "flex row title"
                }, ["en-US" == t.lang ? e("div", {
                    staticClass: "bold-font"
                }, [t._v("\n                DOS Community Token Promotion\n            ")]) : e("div", {
                    staticClass: "bold-font"
                }, [t._v("\n                DOS 预售\n            ")]), t._v(" "), "en-US" == t.lang ? e("div", {
                    staticStyle: {
                        "margin-left": "80px"
                    },
                    attrs: {
                        clsas: "flex col"
                    }
                }, [e("div", {
                    staticClass: "font-light"
                }, [t._v("\n                    Start Time: 10:00 p.m. EST, Mar 10th, 2019\n                ")]), t._v(" "), e("div", {
                    staticClass: "font-light"
                }, [t._v("\n                    End Time: 10:00 p.m. EST, Mar 12th, 2019\n                ")])]) : e("div", {
                    staticStyle: {
                        "margin-left": "80px"
                    },
                    attrs: {
                        clsas: "flex col"
                    }
                }, [e("div", {
                    staticClass: "font-light"
                }, [t._v("\n                    预售开始时间: 北京时间2019-03-11 10:00:00\n                ")]), t._v(" "), e("div", {
                    staticClass: "font-light"
                }, [t._v("\n                    预售结束时间: 北京时间2019-03-13 10:00:00\n                ")])])]), t._v(" "), e("div", {
                    staticClass: "price flex row"
                }, ["en-US" == t.lang ? e("div", {
                    staticClass: "content-part flex col"
                }, [e("div", {
                    staticClass: "title-font"
                }, [t._v("\n                    Price(BTMX): 1 DOS = " + t._s(t.showPrice ? .546 : "--") + " BTMX\n                ")]), t._v(" "), e("div", {
                    staticClass: "content-font"
                }, [t._v("\n                    Quota: 20,000 DOS / account\n                ")]), t._v(" "), e("div", {
                    staticClass: "content-font"
                }, [t._v("\n                    Supply Amount: 10,000,000 DOS\n                ")])]) : e("div", {
                    staticClass: "content-part flex col"
                }, [e("div", {
                    staticClass: "title-font"
                }, [t._v("\n                    BTMX预售价格：1 DOS = " + t._s(t.showPrice ? .546 : "--") + " BTMX\n                ")]), t._v(" "), e("div", {
                    staticClass: "content-font"
                }, [t._v("\n                    预售额度：20,000 DOS / 账户\n                ")]), t._v(" "), e("div", {
                    staticClass: "content-font"
                }, [t._v("\n                    发行数量：10,000,000 DOS\n                ")])]), t._v(" "), e("div", {
                    staticClass: "vertical"
                }), t._v(" "), "en-US" == t.lang ? e("div", {
                    staticClass: "content-part flex col"
                }, [e("div", {
                    staticClass: "title-font",
                    staticStyle: {
                        "padding-left": "80px"
                    }
                }, [t._v("\n                    Price(ETH): 1 DOS = " + t._s(t.showPrice ? 938e-7 : "--") + " ETH\n                ")]), t._v(" "), e("div", {
                    staticClass: "content-font",
                    staticStyle: {
                        "padding-left": "80px"
                    }
                }, [t._v("\n                    Quota: 20,000 DOS / account\n                ")]), t._v(" "), e("div", {
                    staticClass: "content-font",
                    staticStyle: {
                        "padding-left": "80px"
                    }
                }, [t._v("\n                    Supply Amount: 5,000,000 DOS\n                ")])]) : e("div", {
                    staticClass: "content-part flex col"
                }, [e("div", {
                    staticClass: "title-font",
                    staticStyle: {
                        "padding-left": "80px"
                    }
                }, [t._v("\n                    ETH预售价格：1 DOS = " + t._s(t.showPrice ? 938e-7 : "--") + " ETH\n                ")]), t._v(" "), e("div", {
                    staticClass: "content-font",
                    staticStyle: {
                        "padding-left": "80px"
                    }
                }, [t._v("\n                    预售额度：20,000 DOS / 账户\n                ")]), t._v(" "), e("div", {
                    staticClass: "content-font",
                    staticStyle: {
                        "padding-left": "80px"
                    }
                }, [t._v("\n                    发行数量：5,000,000 DOS\n                ")])])]), t._v(" "), e("div", {
                    staticClass: "rule flex col"
                }, ["en-US" == t.lang ? e("div", {
                    staticClass: "rule-title"
                }, [t._v("\n                Terms & Conditions:\n            ")]) : e("div", {
                    staticClass: "rule-title"
                }, [t._v("\n                活动规则:\n            ")]), t._v(" "), e("div", {
                    staticClass: "rule-content flex col"
                }, [e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("1.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("As the organizer, DOS Network takes full responsibility for the token promotion. BitMax.io only provides technology and execution support for this promotion.")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("本次预售活动主体方和责任方均为DOS Network，BitMax.io仅在技术和执行上协助DOS Network进行预售；")])]), t._v(" "), e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("2.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("Users are required to agree and acknowledge the following agreements in order to participate in the promotion: DOS-Privacy Policy, DOS-T&Cs, DOS-Notice and Disclaimer")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("参与预售时需同意并确认《DOS-Privacy Policy》、《DOS-T&Cs》和《DOS-Notice and Disclaimer》协议；")])]), t._v(" "), e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("3.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("Users are required to complete KYC V2 on BitMax.io in order to participate in the promotion. Users who fail the KYC verification will be deemed to voluntarily give up the promotion quota.")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("参与预售活动的BitMax.io账户需通过KYC V2认证，不符合KYC条件的用户视为主动放弃预售资格；")])]), t._v(" "), e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("4.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("In order to participate in the promotion, Users are required to select the payment method - ETH or BTMX, and complete the signup for BitMax.io account including name (Verified by KYC V2) and email verification code.")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("参与预售活动的用户需先选择支付币种ETH/BTMX，填写BitMax.io账户、KYC证件姓名、邮箱验证码参与活动；")])]), t._v(" "), e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("5.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("Upon the confirmation of promotion, full amount of EHT or BTMX will be deducted from the user’s BitMax.io account within 1 business day. Please make sure you have enough balance at the time. （Note: BTMX under lock-up status for data usage reward can be used as payment to purchase quota)")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("提交购买成功后1个工作日内将从填写的BitMax.io账户资产中扣除应付金额的ETH/BTMX，请确保账户余额充足；（注：支持“信息费锁仓”BTMX购买）")])]), t._v(" "), e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("6.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("If there is no enough balance for payment, the user will be deemed to voluntarily give up the promotion quota and will no longer be eligible for participation in promotion.")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("若扣款时账户金额不足视为主动放弃购买资格，不再予以发放购买额度； ")])]), t._v(" "), e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("7.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("Lock-up/Unlock Rule: 50% of promotion will be unlocked and deposited to the user’s BitMax.io account upon the token listing. The rest of 50% promotion will be unlocked and deposited to the user’s BitMax.io account 3 months post the token listing.")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("锁仓/解锁规则：预售部分上币时解锁50%至BitMax.io账户，3个月后解锁50%至BitMax.io账户；")])]), t._v(" "), e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("8.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("Total quota for the promotion is limited. So once the limit is reached, the promotion will be concluded.")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("本次预售的总额度有限，售完即止。如售卖额度提前售完，则提前结束；")])]), t._v(" "), e("div", {
                    staticClass: "rule-line"
                }, [e("span", [t._v("9.")]), t._v(" "), "en-US" == t.lang ? e("span", {
                    staticClass: "ml-5"
                }, [t._v("The promotion will only be available to the users from the countries and regions where the local laws and regulations permit."), e("br"), t._v("Therefore, the users from the following countries and regions are prohibited to participate in the DOS promotion: United States, Balkans region, Belarus, Myanmar, Côte d'Ivoire, Cuba, Democratic Republic of the Congo, Iran, Iraq, Liberia, North Korea, Sudan, Syrian Arab Republic, Zimbabwe, Algeria, Bangladesh, Bolivia, Cambodia, Ecuador, Nepal, Afghanistan, Burundi, Central African Republic, China, Ethiopia, Guinea, Guinea-Bissau, Lebanon, Sri Lanka, Libya, Serbia, Somalia, South Sudan, Thailand, Tunisia, Trinidad and Tobago, Ukraine, Uganda, Venezuela, Yemen.")]) : e("span", {
                    staticClass: "ml-5"
                }, [t._v("DOS只对获得相应法律许可内的国家及地区用户开放预售资格。"), e("br"), t._v("目前禁止以下国家及地区的用户参与预售：美国，巴尔干半岛，白俄罗斯，缅甸，科特廸瓦，古巴，刚果民主共和国，伊朗，伊拉克，利比里亚，朝鲜，苏丹，阿拉伯叙利亚共和国，津巴布韦，阿尔及利亚，孟加拉，玻利维亚，柬埔寨，厄瓜多尔，尼泊尔，阿富汗，布隆迪，中非共和国，中国大陆，埃塞俄比亚，几内亚，几内亚比绍，黎巴嫩，斯里兰卡，利比亚，塞尔维亚，索马里，南苏丹，泰国，突尼斯，特立尼达和多巴哥，乌克兰，乌干达，委内瑞拉，也门。")])])]), t._v(" "), "en-US" == t.lang ? e("div", {
                    staticClass: "rule-conf"
                }, [t._v("      \n                Please read and agree to the following terms:\n            ")]) : e("div", {
                    staticClass: "rule-conf"
                }, [t._v("\n                请先阅读并同意一下协议:\n            ")]), t._v(" "), e("div", {
                    staticStyle: {
                        "margin-bottom": "10px"
                    }
                }, [e("el-checkbox", {
                    model: {
                        value: t.read1,
                        callback: function(a) {
                            t.read1 = a
                        },
                        expression: "read1"
                    }
                }, [e("span", {
                    staticClass: "dos-conf",
                    on: {
                        click: function(a) {
                            return t.goto("../../static/DOS - Privacy Policy.pdf", "_blank")
                        }
                    }
                }, [t._v("DOS - Privacy Policy")])])], 1), t._v(" "), e("div", {
                    staticStyle: {
                        "margin-bottom": "10px"
                    }
                }, [e("el-checkbox", {
                    model: {
                        value: t.read2,
                        callback: function(a) {
                            t.read2 = a
                        },
                        expression: "read2"
                    }
                }, [e("span", {
                    staticClass: "dos-conf",
                    on: {
                        click: function(a) {
                            return t.goto("../../static/DOS - T&Cs.pdf", "_blank")
                        }
                    }
                }, [t._v("DOS - T&Cs")])])], 1), t._v(" "), e("div", {
                    staticStyle: {
                        "margin-bottom": "24px"
                    }
                }, [e("el-checkbox", {
                    model: {
                        value: t.read3,
                        callback: function(a) {
                            t.read3 = a
                        },
                        expression: "read3"
                    }
                }, [e("span", {
                    staticClass: "dos-conf",
                    on: {
                        click: function(a) {
                            return t.goto("../../static/DOS - Notice and Disclaimer.pdf", "_blank")
                        }
                    }
                }, [t._v("DOS - Notice and Disclaimer")])])], 1), t._v(" "), e("button", {
                    staticClass: "buy-btn",
                    class: {
                        enabled: t.enabled
                    },
                    on: {
                        click: t.openDialog
                    }
                }, [t._v("\n                " + t._s(t.buyBtn)), e("i", {
                    staticClass: "el-icon-back rotate"
                })])])]), t._v(" "), e("div", {
                    staticClass: "bot-part"
                }, [e("div", {
                    staticClass: "flex"
                }, ["en-US" == t.lang ? e("div", {
                    staticClass: "bot-part-left"
                }, [e("h1", [t._v("DOS Token Sale Plan")]), t._v(" "), e("p", [t._v("Promotion Price: 1 DOS = $0.012")]), t._v(" "), e("p", [t._v("Private Sale Price: 1 DOS = $0.01")]), t._v(" "), e("p", [t._v("Private Sale Lock-up: 25% no lock up, vesting 25% every 3 months over 9 months")]), t._v(" "), e("p", [t._v("Community Token Promotion Lock-up: 50% no lock up, vesting 50% after 3 months")]), t._v(" "), e("p", [t._v("Total Supply: 1,000,000,000 DOS")]), t._v(" "), e("p", [t._v("Initial Circulation: 43,750,000 DOS")])]) : e("div", {
                    staticClass: "bot-part-left"
                }, [e("h1", [t._v("DOS Token 计划")]), t._v(" "), e("p", [t._v("预售价格 1 DOS = $0.012")]), t._v(" "), e("p", [t._v("私募价格 1 DOS = $0.01")]), t._v(" "), e("p", [t._v("私募锁定：上币时解锁25%，后面每三个月解锁25%，9个月解锁完成")]), t._v(" "), e("p", [t._v("社区预售锁定：上币时解锁50%，三个月后解锁50%")]), t._v(" "), e("p", [t._v("发行总量：1,000,000,000")]), t._v(" "), e("p", [t._v("初始流通量：43,750,000")])]), t._v(" "), e("div", {
                    staticClass: "bot-part-right flex"
                }, [e("div", {
                    staticClass: "dos-chart",
                    class: {
                        en: "en-US" == t.lang
                    }
                })])])]), t._v(" "), e("b-dialog", {
                    ref: "buyDialog",
                    staticClass: "buy-dialog",
                    attrs: {
                        title: "en-US" == t.lang ? "Sign up for DOS Promotion" : "购买DOS",
                        center: !0,
                        handleClose: !0
                    },
                    on: {
                        close: t.clearData
                    }
                }, [e("div", {
                    staticClass: "buy-dialog-content",
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [e("div", {
                    staticClass: "buy-dialog-content-tabs flex"
                }, [e("div", {
                    staticClass: "tab",
                    class: {
                        actived: 0 === t.tab
                    },
                    on: {
                        click: function(a) {
                            return t.changeTab(0)
                        }
                    }
                }, [t._v("BTMX")]), t._v(" "), e("div", {
                    staticClass: "tab",
                    class: {
                        actived: 1 === t.tab
                    },
                    on: {
                        click: function(a) {
                            return t.changeTab(1)
                        }
                    }
                }, [t._v("ETH")])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item"
                }, ["en-US" == t.lang ? e("div", {
                    staticClass: "buy-dialog-content-item-label"
                }, [e("div", [t._v("BitMax Account:")]), t._v(" "), e("a", {
                    staticClass: "to-regist",
                    on: {
                        click: function(a) {
                            return t.goto("https://bitmax.io/#/register", "_blank")
                        }
                    }
                }, [t._v("Register")])]) : e("div", {
                    staticClass: "buy-dialog-content-item-label"
                }, [e("div", [t._v("BitMax账户:")]), t._v(" "), e("a", {
                    staticClass: "to-regist",
                    on: {
                        click: function(a) {
                            return t.goto("https://btmx.com/#/register", "_blank")
                        }
                    }
                }, [t._v("去注册")])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item-input"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.formData.emailOrPhone,
                        expression: "formData.emailOrPhone"
                    }],
                    ref: "btmxAccount",
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.formData.emailOrPhone
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || t.$set(t.formData, "emailOrPhone", a.target.value)
                        }
                    }
                })])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item"
                }, ["en-US" == t.lang ? e("div", {
                    staticClass: "buy-dialog-content-item-label"
                }, [e("div", [t._v("Verification Code:")]), t._v(" "), e("div", [t.codeSending ? e("div", [t._v(t._s(t.codeTimer) + " s")]) : e("a", {
                    staticClass: "send-code",
                    on: {
                        click: t.sendCode
                    }
                }, [t._v("Send")])])]) : e("div", {
                    staticClass: "buy-dialog-content-item-label"
                }, [e("div", [t._v("验证码:")]), t._v(" "), e("div", [t.codeSending ? e("div", [t._v(t._s(t.codeTimer) + " 秒")]) : e("a", {
                    staticClass: "send-code",
                    on: {
                        click: t.sendCode
                    }
                }, [t._v("发送")])])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item-input"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.formData.code,
                        expression: "formData.code"
                    }],
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.formData.code
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || t.$set(t.formData, "code", a.target.value)
                        }
                    }
                })])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item"
                }, [e("div", {
                    staticClass: "buy-dialog-content-item-label"
                }, ["en-US" == t.lang ? e("div", [t._v("Last Name:")]) : e("div", [t._v("姓:")])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item-input"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.formData.lastName,
                        expression: "formData.lastName"
                    }],
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.formData.lastName
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || t.$set(t.formData, "lastName", a.target.value)
                        }
                    }
                })])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item"
                }, [e("div", {
                    staticClass: "buy-dialog-content-item-label"
                }, ["en-US" == t.lang ? e("div", [t._v("First Name:")]) : e("div", [t._v("名:")])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item-input"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.formData.firstName,
                        expression: "formData.firstName"
                    }],
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.formData.firstName
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || t.$set(t.formData, "firstName", a.target.value)
                        }
                    }
                })])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item"
                }, [e("div", {
                    staticClass: "buy-dialog-content-item-label"
                }, ["en-US" == t.lang ? e("div", [t._v("Quota: 20,000 DOS")]) : e("div", [t._v("购买额度: 20,000 DOS")])])]), t._v(" "), e("div", {
                    staticClass: "buy-dialog-content-item"
                }, [e("div", {
                    staticClass: "buy-dialog-content-item-label"
                }, ["en-US" == t.lang ? e("div", [t._v("Total Amount: 20,000 " + t._s(t.tab ? "ETH" : "BTMX"))]) : e("div", [t._v("应付金额: " + t._s(t.tab ? "1.7518 ETH" : "3692 BTMX"))])])])]), t._v(" "), e("div", {
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, ["en-US" == t.lang ? e("div", {
                    staticClass: "buy-dialog-btn",
                    on: {
                        click: t.buy
                    }
                }, [t._v("Confirm")]) : e("div", {
                    staticClass: "buy-dialog-btn",
                    on: {
                        click: t.buy
                    }
                }, [t._v("确认购买")])])])], 1)
            },
            staticRenderFns: [function() {
                var t = this.$createElement
                  , a = this._self._c || t;
                return a("div", {
                    staticStyle: {
                        display: "flex"
                    }
                }, [a("div", {
                    staticClass: "top-logo"
                })])
            }
            ]
        };
        var m = {
            name: "App",
            data: function() {
                return {
                    lang: localStorage.getItem("lang") || "en-US"
                }
            },
            components: {
                dos: e("VU/8")(v, u, !1, function(t) {
                    e("QTZp")
                }, "data-v-501876ab", null).exports
            }
        }
          , p = {
            render: function() {
                var t = this.$createElement
                  , a = this._self._c || t;
                return a("div", {
                    staticClass: "app-main",
                    class: [this.lang],
                    attrs: {
                        id: "app"
                    }
                }, [a("dos")], 1)
            },
            staticRenderFns: []
        };
        var f = e("VU/8")(m, p, !1, function(t) {
            e("uXVG")
        }, null, null).exports
          , _ = e("zL8q")
          , h = e.n(_)
          , b = {
            render: function() {
                var t = this
                  , a = t.$createElement
                  , e = t._self._c || a;
                return e("div", {
                    staticClass: "v2-b-confirm"
                }, [e("div", {
                    staticClass: "v2-b-confirm-backdrop",
                    class: {
                        visiable: t.backdrop
                    }
                }), t._v(" "), e("transition", {
                    attrs: {
                        name: "fade-in-top"
                    }
                }, [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    staticClass: "v2-b-confirm-box"
                }, [e("div", {
                    staticClass: "v2-b-confirm-box_header"
                }, [t.typeIcon ? e("i", {
                    staticClass: "header-icon",
                    class: t.typeIcon
                }) : t._e(), t._v(" "), e("div", {
                    staticClass: "v2-b-confirm-box_header-title"
                }, [t._v(t._s(t.title))]), t._v(" "), t.hiddenDefaultClose ? t._e() : e("button", {
                    staticClass: "el-dialog__headerbtn v2-b-confirm-box_header-close",
                    attrs: {
                        type: "button",
                        "aria-label": "Close"
                    },
                    on: {
                        click: function(a) {
                            return t.btnClick(-1)
                        }
                    }
                }, [e("i", {
                    staticClass: "el-dialog__close el-icon el-icon-close"
                })])]), t._v(" "), e("div", {
                    staticClass: "v2-b-confirm-box_content"
                }, [t._v("\n                " + t._s(t.content) + "\n            ")]), t._v(" "), e("div", {
                    staticClass: "v2-b-confirm-box_footer"
                }, [t.buttons.length ? e("div", {
                    staticClass: "v2-b-confirm-box_footer-btns",
                    class: {
                        "one-btn": t.buttons.length && 1 == t.buttons.length
                    }
                }, t._l(t.buttons, function(a, n) {
                    return e("div", {
                        key: n,
                        staticClass: "footer-btn",
                        class: [a.type, {
                            marginLeft10: n > 0
                        }],
                        on: {
                            click: function(a) {
                                return t.btnClick(n)
                            }
                        }
                    }, [t._v(t._s(a.text))])
                }), 0) : t._e()])])])], 1)
            },
            staticRenderFns: []
        };
        var g = e("VU/8")({
            data: function() {
                return {
                    title: "",
                    content: "",
                    type: "",
                    buttons: [],
                    backdrop: !0,
                    show: !1,
                    hiddenDefaultClose: !1,
                    onClose: null,
                    onBtnClick: null
                }
            },
            mounted: function() {},
            computed: {
                typeIcon: function() {
                    return this.type ? "el-icon-" + this.type : ""
                }
            },
            methods: {
                close: function() {
                    this.show = !1,
                    this.onClose()
                },
                btnClick: function(t) {
                    -1 != t ? this.onBtnClick(t) : this.close()
                }
            }
        }, b, !1, function(t) {
            e("BJ9Y")
        }, null, null).exports
          , C = n.default.extend(g)
          , S = void 0
          , y = function(t) {
            return t.buttons || (t.buttons = []),
            t.buttons = t.buttons.map(function(t, a) {
                return "string" == typeof t ? (t = {
                    text: t
                },
                1 === a && (t.type = "primary")) : 1 !== a || t.hasOwnProperty("type") || (t.type = "primary"),
                t
            }),
            t.hasOwnProperty("backdrop") || (t.backdrop = !0),
            setTimeout(function() {
                t.show = !0
            }),
            (S = new C({
                data: t
            })).vm = S.$mount(),
            document.body.appendChild(S.vm.$el),
            t.onClose = function() {
                setTimeout(function() {
                    S.vm.$el.remove()
                }, 300)
            }
            ,
            t.onBtnClick = function(a) {
                t.cb({
                    btn: a,
                    instance: S
                })
            }
            ,
            {
                then: function(a) {
                    t.cb = a
                }
            }
        }
          , D = {
            install: function(t) {
                t.prototype.$bConfirm = y
            }
        };
        e("tvR6"),
        e("TL8F"),
        e("Kjo3");
        n.default.use(D),
        n.default.use(h.a),
        n.default.config.productionTip = !1,
        new n.default({
            el: "#app",
            components: {
                App: f
            },
            template: "<App/>"
        })
    },
    QTZp: function(t, a) {},
    TL8F: function(t, a) {},
    nOek: function(t, a) {},
    tvR6: function(t, a) {},
    uXVG: function(t, a) {}
}, ["NHnr"]);
