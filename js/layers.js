addLayer("Q", {
    name: "QqQeInfinity", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#18e308",
    requires: new Decimal(1.79e308), // Can be a function that takes requirement increases into account
    resource: "QqQeInfinity", // Name of prestige currency
    baseResource: "QqQe308", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "q", description: "Q: 进行QqQeInfinity重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            name: "作者的留言",
            description: "作者留言：114514分钟内通不了关我让你随便超",
            cost: new Decimal (-1),
        },
        12: {
            name: "开始游戏",
            description: "开始生产QqQe308，速度为1.79e308/s",
            cost: new Decimal (1),
        },
        13: {
            name: "通货膨胀",
            description: "生产QqQe308的速度x(当前QqQe308的数量+1)^0.5",
            cost: new Decimal (2),
            effect() {
                return player.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            name: "继续膨胀",
            description: "上个升级的效果为原来的平方",
            cost: new Decimal (1.33e154),
            effect() {
                return player.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            name: "恭喜通关",
            description: "生产QqQe308的速度x(当前QqQe308的数量+1)^308",
            cost: new Decimal ("1e2085"),
            effect() {
                return player.points.add(1).pow(308)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            name: "没想到吧还有一堆",
            description: "生产QqQe308的速度x(当前QqQeInfinity的数量+1)^1.79e308",
            cost: new Decimal ("e1.79e308"),
            effect() {
                return player[this.layer].points.add(1).pow(1.79e308)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked() {return player.Q.points.gte(new Decimal ("e1.79e308"))}
        },
        22: {
            name: "",
            description: "生产QqQe308的速度^(当前QqQeInfinity的数量+1)^1e2085",
            cost: new Decimal ("e1e50000"),
            effect() {
                return player[this.layer].points.add(1).pow(new Decimal ("1e2085"))
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"^" },
            unlocked() {return player.Q.points.gte(new Decimal ("e1.79e308"))}
        },
        23: {
            name: "",
            description: "你真正到达了游戏的尽头...?",
            cost: new Decimal ("(e^308)1.79"),
            unlocked() {return player.Q.points.gte(new Decimal ("e1.79e308"))}
        },
    },
})

addLayer("L", {
    name: "QqQe616", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
		points: new Decimal(0),
    }},
    color: "#1f1e33",
    requires: new Decimal("(e^308)1.79"), // Can be a function that takes requirement increases into account
    resource: "Lowrio", // Name of prestige currency
    baseResource: "QqQeInfinity", // Name of resource prestige is based on
    baseAmount() {return player.Q.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    getResetGain() {return player.Q.points.tetrate(1/308)},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    getNextAt(){
        return "操 lowrio many times over again"
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "l: 进行lowrio重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            name: "arcaea sb",
            description: "gain 100% of Q/s",
            cost: new Decimal ("100"),
        },
        12: {
            name: "arcaea more sb",
            description: "qwqe308 ^^1.05",
            cost: new Decimal ("1e120"),
        },
        13: {
            name: "308*2 = 616",
            description: "qwqe308 ^^1.025",
            cost: new Decimal ("ee200"),
        },
        21: {
            name: "ez",
            description: "qwqe308 ^^sqrt(slog(qwqe308))",
            cost: new Decimal ("eee10"),
        },
        22: {
            name: "ez x2",
            description: "L21 x10",
            cost: new Decimal ("(e^100)10"),
        },
    },
})
