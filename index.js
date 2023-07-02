const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000

const iphones = [
        {
            "value": 3000,
            "name": "iPhone SE",
            "type": "iphone",
            "srcImg": [
                "https://i.imgur.com/VyJTUtd.png"
            ],
            "specifications": [
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Midnight",
                            "srcImg": "https://i.imgur.com/85rMH8h.png"
                        },
                        {
                            "name": "Starlight",
                            "srcImg": "https://i.imgur.com/0Nf4ftd.png"
                        },
                        {
                            "name": "Red",
                            "srcImg": "https://i.imgur.com/nJvT1wT.png"
                        }
                    ]
                },
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "4.7-inch Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A15 Bionic chip with 4-core GPU"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP Main"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "64 GB"
                        },
                        {
                            "name": "128 GB",
                            "value": 50
                        },
                        {
                            "name": "256 GB",
                            "value": 150
                        }
                    ]
                }
            ]
        },
        {
            "value": 699,
            "name": "iPhone 12",
            "type": "iphone",
            "srcImg": [
                "https://i.imgur.com/fJEvULJ.png",
            ],
            "specifications": [
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black",
                            "srcImg": "https://i.imgur.com/rvJXTo2.png"
                        },
                        {
                            "name": "White",
                            "srcImg": "https://i.imgur.com/eC15LBy.png"
                        },
                        {
                            "name": "Red",
                            "srcImg": "https://i.imgur.com/0Yd0PRo.png"
                        },
                        {
                            "name": "Green",
                            "srcImg": "https://i.imgur.com/HmRIaMi.png"
                        },
                        {
                            "name": "Blue",
                            "srcImg": "https://i.imgur.com/zPzb56Y.png"
                        }
                    ]
                },
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.1-inch Super Retina XDR"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A14 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP dual-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "64 GB"
                        },
                        {
                            "name": "128 GB",
                            "value": 50
                        },
                        {
                            "name": "256 GB",
                            "value": 150
                        }
                    ]
                }
            ]
        },
        {
            "value": 999,
            "name": "iPhone 13",
            "type": "iphone",
            "srcImg": [
                "https://i.imgur.com/fq2xDPu.png"
            ],
            "specifications": [
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Pink",
                            "srcImg": "https://i.imgur.com/fPvM82l.png"
                        },
                        {
                            "name": "Blue",
                            "srcImg": "https://i.imgur.com/fF0v9GK.png"
                        },
                        {
                            "name": "Midnight",
                            "srcImg": "https://i.imgur.com/LjMz6D5.png"
                        },
                        {
                            "name": "Starlight",
                            "srcImg": "https://i.imgur.com/zSO5fKO.png"
                        },
                        {
                            "name": "Green",
                            "srcImg": "https://i.imgur.com/Facfy8W.png"
                        },
                        {
                            "name": "Product(RED)",
                            "srcImg": "https://i.imgur.com/yQYiR5P.png"
                        }
                    ]
                },
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.1-inch Super Retina XDR"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A15 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP dual-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "128 GB"
                        },
                        {
                            "name": "256 GB",
                            "value": 100
                        },
                        {
                            "name": "512 GB",
                            "value": 200
                        },
                        {
                            "name": "1 TB",
                            "value": 400
                        }
                    ]
                }
            ]
        },
        {
            "value": 1099,
            "name": "iPhone 13 Mini",
            "type": "iphone",
            "srcImg": [
                "https://i.imgur.com/fq2xDPu.png"
            ],
            "specifications": [
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Pink",
                            "srcImg": "https://i.imgur.com/fPvM82l.png"
                        },
                        {
                            "name": "Blue",
                            "srcImg": "https://i.imgur.com/fF0v9GK.png"
                        },
                        {
                            "name": "Midnight",
                            "srcImg": "https://i.imgur.com/LjMz6D5.png"
                        },
                        {
                            "name": "Starlight",
                            "srcImg": "https://i.imgur.com/zSO5fKO.png"
                        },
                        {
                            "name": "Green",
                            "srcImg": "https://i.imgur.com/Facfy8W.png"
                        },
                        {
                            "name": "Product(RED)",
                            "srcImg": "https://i.imgur.com/yQYiR5P.png"
                        }
                    ]
                },
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "5.4-inch Super Retina XDR"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A15 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP dual-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "128 GB"
                        },
                        {
                            "name": "256 GB",
                            "value": 100
                        },
                        {
                            "name": "512 GB",
                            "value": 200
                        },
                        {
                            "name": "1 TB",
                            "value": 400
                        }
                    ]
                }
            ]
        },
        {
            "value": 999,
            "name": "iPhone 14",
            "type": "iphone",
            "srcImg": [
                "https://i.imgur.com/YP5VVmn.png"
            ],
            "specifications": [
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Midnight",
                            "srcImg": "https://i.imgur.com/AKJCzI1.png"
                        },
                        {
                            "name": "Starlight",
                            "srcImg": "https://i.imgur.com/sPGTi7U.png"
                        },
                        {
                            "name": "Red",
                            "srcImg": "https://i.imgur.com/e3PQ4IX.png"
                        },
                        {
                            "name": "Purple",
                            "srcImg": "https://i.imgur.com/0VuDrcg.png"
                        },
                        {
                            "name": "Blue",
                            "srcImg": "https://i.imgur.com/vfsuihe.png"
                        },
                        {
                            "name": "Yellow",
                            "srcImg": "https://i.imgur.com/q04Ly1y.png"
                        }
                    ]
                },
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.1-inch Super Retina XDR"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A16 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP dual-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "128 GB"
                        },
                        {
                            "name": "256 GB",
                            "value": 100
                        },
                        {
                            "name": "512 GB",
                            "value": 200
                        },
                        {
                            "name": "1 TB",
                            "value": 400
                        }
                    ]
                }
            ]
        },
        {
            "value": 1099,
            "name": "iPhone 14 Plus",
            "type": "iphone",
            "srcImg": [
                "https://i.imgur.com/YP5VVmn.png"
            ],
            "specifications": [
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Midnight",
                            "srcImg": "https://i.imgur.com/AKJCzI1.png"
                        },
                        {
                            "name": "Starlight",
                            "srcImg": "https://i.imgur.com/sPGTi7U.png"
                        },
                        {
                            "name": "Red",
                            "srcImg": "https://i.imgur.com/e3PQ4IX.png"
                        },
                        {
                            "name": "Purple",
                            "srcImg": "https://i.imgur.com/0VuDrcg.png"
                        },
                        {
                            "name": "Blue",
                            "srcImg": "https://i.imgur.com/vfsuihe.png"
                        },
                        {
                            "name": "Yellow",
                            "srcImg": "https://i.imgur.com/q04Ly1y.png"
                        }
                    ]
                },
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.7-inch"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A16 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP dual-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "128 GB"
                        },
                        {
                            "name": "256 GB",
                            "value": 100
                        },
                        {
                            "name": "512 GB",
                            "value": 200
                        },
                        {
                            "name": "1 TB",
                            "value": 400
                        }
                    ]
                }
            ]
        },
        {
            "value": 1299,
            "name": "iPhone 14 Pro",
            "type": "iphone",
            "srcImg": [
                "https://i.imgur.com/JEKgae4.png"
            ],
            "specifications": [
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Deep Purple",
                            "srcImg": "https://i.imgur.com/4XLl1ec.png"
                        },
                        {
                            "name": "Gold",
                            "srcImg": "https://i.imgur.com/OkURmrW.png"
                        },
                        {
                            "name": "Silver",
                            "srcImg": "https://i.imgur.com/OSlyLLp.png"
                        },
                        {
                            "name": "Space Black",
                            "srcImg": "https://i.imgur.com/86NvvyB.png"
                        }
                    ]
                },
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.1-inch Super Retina XDR"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A16 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP triple-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "128 GB"
                        },
                        {
                            "name": "256 GB",
                            "value": 100
                        },
                        {
                            "name": "512 GB",
                            "value": 200
                        },
                        {
                            "name": "1 TB",
                            "value": 400
                        }
                    ]
                }
            ]
        },
        {
            "value": 1399,
            "name": "iPhone 14 Pro Max",
            "type": "iphone",
            "srcImg": [
                "https://i.imgur.com/JEKgae4.png"
            ],
            "specifications": [
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Deep Purple",
                            "srcImg": "https://i.imgur.com/4XLl1ec.png"
                        },
                        {
                            "name": "Gold",
                            "srcImg": "https://i.imgur.com/OkURmrW.png"
                        },
                        {
                            "name": "Silver",
                            "srcImg": "https://i.imgur.com/OSlyLLp.png"
                        },
                        {
                            "name": "Space Black",
                            "srcImg": "https://i.imgur.com/86NvvyB.png"
                        }
                    ]
                },
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.7-inch Super Retina XDR"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A16 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP triple-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "128 GB"
                        },
                        {
                            "name": "256 GB",
                            "value": 100
                        },
                        {
                            "name": "512 GB",
                            "value": 200
                        },
                        {
                            "name": "1 TB",
                            "value": 400
                        }
                    ]
                }
            ]
        }
    ]
const macbook = [
    {
        "value": 7500,
        "name": "MacBook Air 13-inch (M1 chip)",
        "type": "macbook",
        "srcImg": "https://i.imgur.com/MPKg16X.jpg",
        "description": "Two Thunderbolt / USB 4 ports\n" +
            "Magic Keyboard with Touch ID\n" +
            "Force Touch trackpad\n" +
            "30W USB-C Power Adapter\n"+
            "7-Core GPU",
        "specifications": [
            {
              "title": "Color",
              "items": [
                  {
                      "name": "Gray",
                      "srcImg": "https://i.imgur.com/ZL4SUvb.png"
                  },
                  {
                      "name": "Gold",
                      "srcImg": "https://i.imgur.com/q78LNle.png"
                  },
                  {
                      "name": "Silver",
                      "srcImg": "https://i.imgur.com/KL4hSW9.png"
                  }
              ]
            },
            {
                "title": "Processor",
                "items": [
                    {
                        "name": "M1 8-Core CPU"
                    }
                ]
            },
            {
                "title": "Display",
                "items": [
                    {
                        "name": "13-inch Retina display with True Tone"
                    }
                ]
            },
            {
                "title": "RAM",
                "items": [
                    {
                        "name": "8 GB"
                    },
                    {
                        "name": "16 GB",
                        "value": 2000
                    }
                ]
            },
            {
                "title": "Storage",
                "items": [
                    {
                        "name":"256 GB"
                    },
                    {
                        "name":"512 GB",
                        "value": 1000
                    },
                    {
                        "name":"1 TB",
                        "value": 1500
                    },
                    {
                        "name": "2 TB",
                        "value": 2000
                    }
                ]
            },
            {
                "title": "Keyboard Language",
                "items": [
                    {
                        "name": "Portuguese"
                    },
                    {
                        "name": "US English"
                    }
                ]
            }
        ]
    },
]
const macMini = [
    {
        "value": 6000,
        "name": "Mac Mini",
        "type": "mac-mini",
        "srcImg": "https://i.imgur.com/9t6gtXV.png",
        "specifications": [
            {
                "title": "Processor",
                "items": [
                    {
                        "name": "M1 chip"
                    },
                    {
                        "name": "M2 chip",
                        "value": 3500
                    }
                ]
            },
            {
                "title": "RAM",
                "items": [
                    {
                        "name": "8 GB"
                    },
                    {
                        "name": "16 GB",
                        "value": 1500
                    }
                ]
            },
            {
                "title": "Storage",
                "items": [
                    {
                        "name":"256 GB"
                    },
                    {
                        "name":"512 GB",
                        "value": 200
                    },
                    {
                        "name":"1 TB",
                        "value": 800
                    },
                    {
                        "name": "2 TB",
                        "value": 1500
                    }
                ]
            }
        ]
    }
]
const macStudio = [
    {
        "value": 24000,
        "name": "Mac Studio",
        "type": "mac-studio",
        "srcImg": "https://i.imgur.com/gIsnqU1.jpg",
        "specifications": [
            {
                "title": "Processor",
                "items": [
                    {
                        "name": "M1 Max | 10-core CPU | 32-core GPU"
                    },
                    {
                        "name": "M1 Ultra | 20-core cpu | 64-core GPU",
                        "value": 7000
                    }
                ]
            },
            {
                "title": "RAM",
                "items": [
                    {
                        "name": "64 GB unified memory"
                    },
                    {
                        "name": "128 GB unified memory",
                        "value": 3000
                    }
                ]
            },
            {
                "title": "Storage",
                "items": [
                    {
                        "name":"512GB SSD storage"
                    },
                    {
                        "name":"1TB SSD storage",
                        "value": 1000
                    },
                    {
                        "name":"2TB SSD storage",
                        "value": 2000
                    },
                    {
                        "name":"4TB SSD storage",
                        "value": 7000
                    },
                    {
                        "name":"8TB SSD storage",
                        "value": 15000
                    }
                ]
            }
        ]
    }
]
const accessories = []


const allProducts = [
    ...iphones,
    ...macbook,
    ...macMini,
    ...accessories,
    ...macStudio,
]

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/products", (req, res) => {
    res.send(allProducts)
})

app.get('/users', (req, res) => {
    res.send([])
})
app.listen(port, () => {
    console.log(`Running on port ${port}.`)
})

module.exports = app