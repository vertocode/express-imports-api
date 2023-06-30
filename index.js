const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000

const iphones = [
        {
            "value": 399,
            "name": "iPhone SE (2nd generation)",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/PKx0WZb.jpg",
            "specifications": [
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
                            "name": "A13 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "White"
                        },
                        {
                            "name": "Red"
                        }
                    ]
                }
            ]
        },
        {
            "value": 699,
            "name": "iPhone 11",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/MnyQV5b.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.1-inch Liquid Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A13 Bionic chip"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "Green"
                        },
                        {
                            "name": "Yellow"
                        },
                        {
                            "name": "Purple"
                        },
                        {
                            "name": "Red"
                        },
                        {
                            "name": "White"
                        }
                    ]
                }
            ]
        },
        {
            "value": 999,
            "name": "iPhone 11 Pro",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/vu6H0Xd.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "5.8-inch Super Retina XDR"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A13 Bionic chip"
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
                            "name": "64 GB"
                        },
                        {
                            "name": "256 GB",
                            "value": 200
                        },
                        {
                            "name": "512 GB",
                            "value": 400
                        }
                    ]
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Midnight Green"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1099,
            "name": "iPhone 11 Pro Max",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/i7nqtMd.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.5-inch Super Retina XDR"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A13 Bionic chip"
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
                            "name": "64 GB"
                        },
                        {
                            "name": "256 GB",
                            "value": 200
                        },
                        {
                            "name": "512 GB",
                            "value": 400
                        }
                    ]
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Midnight Green"
                        }
                    ]
                }
            ]
        },
        {
            "value": 399,
            "name": "iPhone SE (1st generation)",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/sqXs7As.jpg",
            "specifications": [
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
                            "name": "A9 chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "32 GB"
                        },
                        {
                            "name": "128 GB",
                            "value": 100
                        }
                    ]
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Rose Gold"
                        }
                    ]
                }
            ]
        },
        {
            "value": 499,
            "name": "iPhone XR",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/m0v5uAy.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.1-inch Liquid Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A12 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "Blue"
                        },
                        {
                            "name": "Coral"
                        },
                        {
                            "name": "Yellow"
                        },
                        {
                            "name": "Red"
                        },
                        {
                            "name": "White"
                        }
                    ]
                }
            ]
        },
        {
            "value": 699,
            "name": "iPhone XS",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/SQfAWdz.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "5.8-inch Super Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A12 Bionic chip"
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
                            "name": "256 GB",
                            "value": 200
                        },
                        {
                            "name": "512 GB",
                            "value": 400
                        }
                    ]
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        }
                    ]
                }
            ]
        },
        {
            "value": 999,
            "name": "iPhone XS Max",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/GFVBrDE.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "6.5-inch Super Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A12 Bionic chip"
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
                            "name": "256 GB",
                            "value": 200
                        },
                        {
                            "name": "512 GB",
                            "value": 400
                        }
                    ]
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        }
                    ]
                }
            ]
        },
        {
            "value": 699,
            "name": "iPhone X",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/Sn70v09.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "5.8-inch Super Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A11 Bionic chip"
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
                            "name": "256 GB",
                            "value": 200
                        }
                    ]
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        }
                    ]
                }
            ]
        },
        {
            "value": 399,
            "name": "iPhone 8",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/K8PQ5Tz.jpg",
            "specifications": [
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
                            "name": "A11 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
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
                        }
                    ]
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Red"
                        }
                    ]
                }
            ]
        },
        {
            "value": 449,
            "name": "iPhone 8 Plus",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/ou0JYzz.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "5.5-inch Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A11 Bionic chip"
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
                        }
                    ]
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Red"
                        }
                    ]
                }
            ]
        },
        {
            "value": 699,
            "name": "iPhone 7",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/lEO8hGW.jpg",
            "specifications": [
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
                            "name": "A10 Fusion chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "32 GB"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Rose Gold"
                        },
                        {
                            "name": "Red"
                        }
                    ]
                }
            ]
        },
        {
            "value": 799,
            "name": "iPhone 7 Plus",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/8GBRySW.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "5.5-inch Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A10 Fusion chip"
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
                            "name": "32 GB"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Rose Gold"
                        },
                        {
                            "name": "Red"
                        }
                    ]
                }
            ]
        },
        {
            "value": 999,
            "name": "iPhone 6S",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/kICLfva.jpg",
            "specifications": [
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
                            "name": "A9 chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "32 GB"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Rose Gold"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1149,
            "name": "iPhone 6S Plus",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/doyFs0f.jpg",
            "specifications": [
                {
                    "title": "Display",
                    "items": [
                        {
                            "name": "5.5-inch Retina HD"
                        }
                    ]
                },
                {
                    "title": "Processor",
                    "items": [
                        {
                            "name": "A9 chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
                        }
                    ]
                },
                {
                    "title": "Storage",
                    "items": [
                        {
                            "name": "32 GB"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Space Gray"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Rose Gold"
                        }
                    ]
                }
            ]
        },
        {
            "value": 349,
            "name": "iPhone SE (2nd generation)",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/jmTF86Y.jpg",
            "specifications": [
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
                            "name": "A13 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "White"
                        },
                        {
                            "name": "Red"
                        }
                    ]
                }
            ]
        },
        {
            "value": 349,
            "name": "iPhone SE (3rd generation)",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/jmTF86Y.jpg",
            "specifications": [
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
                            "name": "A15 Bionic chip"
                        }
                    ]
                },
                {
                    "title": "Camera",
                    "items": [
                        {
                            "name": "12 MP single-camera system"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "White"
                        },
                        {
                            "name": "Red"
                        }
                    ]
                }
            ]
        },
        {
            "value": 699,
            "name": "iPhone 12",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/M8D0b2D.jpg",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "White"
                        },
                        {
                            "name": "Red"
                        },
                        {
                            "name": "Green"
                        },
                        {
                            "name": "Blue"
                        }
                    ]
                }
            ]
        },
        {
            "value": 799,
            "name": "iPhone 12 mini",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/XZ0pdzR.jpg",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "White"
                        },
                        {
                            "name": "Red"
                        },
                        {
                            "name": "Green"
                        },
                        {
                            "name": "Blue"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1099,
            "name": "iPhone 12 Pro",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/XsgGyYx.jpg",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Graphite"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Pacific Blue"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1199,
            "name": "iPhone 12 Pro Max",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/ok2u3WT.jpg",
            "specifications": [
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
                            "name": "A14 Bionic chip"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Graphite"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Pacific Blue"
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
                "https://i.imgur.com/d0tQjyQ.png",
                "https://i.imgur.com/v96tW3m.png",
                "https://i.imgur.com/jjGmzOc.png"
            ],
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Pink"
                        },
                        {
                            "name": "Blue"
                        },
                        {
                            "name": "Midnight"
                        },
                        {
                            "name": "Starlight"
                        },
                        {
                            "name": "Product(RED)"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1099,
            "name": "iPhone 13 mini",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/9I6w0N5.jpg",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Pink"
                        },
                        {
                            "name": "Blue"
                        },
                        {
                            "name": "Midnight"
                        },
                        {
                            "name": "Starlight"
                        },
                        {
                            "name": "Product(RED)"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1299,
            "name": "iPhone 13 Pro",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/5KGz3pU.jpg",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Graphite"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Sierra Blue"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1399,
            "name": "iPhone 13 Pro Max",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/x5EdgFW.jpg",
            "specifications": [
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
                            "name": "A15 Bionic chip"
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Graphite"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Sierra Blue"
                        }
                    ]
                }
            ]
        },
        {
            "value": 999,
            "name": "iPhone 14",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/d7UQOGC.jpg",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "White"
                        },
                        {
                            "name": "Red"
                        },
                        {
                            "name": "Green"
                        },
                        {
                            "name": "Blue"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1099,
            "name": "iPhone 14 mini",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/ff7aLuh.jpg",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Black"
                        },
                        {
                            "name": "White"
                        },
                        {
                            "name": "Red"
                        },
                        {
                            "name": "Green"
                        },
                        {
                            "name": "Blue"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1299,
            "name": "iPhone 14 Pro",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/ZNL8gtX.jpg",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Graphite"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Bronze"
                        }
                    ]
                }
            ]
        },
        {
            "value": 1399,
            "name": "iPhone 14 Pro Max",
            "type": "iphone",
            "srcImg": "https://i.imgur.com/e5QDo6w.png",
            "specifications": [
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
                },
                {
                    "title": "Color",
                    "items": [
                        {
                            "name": "Graphite"
                        },
                        {
                            "name": "Gold"
                        },
                        {
                            "name": "Silver"
                        },
                        {
                            "name": "Bronze"
                        }
                    ]
                }
            ]
        }
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
const macbook = [
    {
        "value": 7500,
        "name": "MacBook Air",
        "type": "macbook",
        "srcImg": "https://i.imgur.com/MPKg16X.jpg",
        "description": "Macbook is very cool! dynamic description",
        "specifications": [
            {
                "title": "Processor",
                "items": [
                    {
                        "name": "M1 chip"
                    },
                    {
                        "name": "M2 chip",
                        "value": 4000
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
            }
        ]
    },
    {
        "value": 14000,
        "name": "MacBook Pro 14\"",
        "type": "macbook",
        "srcImg": "https://i.imgur.com/xlV8lBV.jpg",
        "description": "Super Macbook!",
        "specifications": [
            {
                "title": "Processor",
                "items": [
                    {
                        "name": "M1 max"
                    },
                    {
                        "name": "M2 max",
                        "value": 4000
                    }
                ]
            },
            {
                "title": "RAM",
                "items": [
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
            }
        ]
    }
]

const allProducts = [
    ...iphones,
    ...macbook,
    ...macMini,
    ...macStudio,
]

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/products", (req, res) => {
    res.send(allProducts)
})
app.listen(port, () => {
    console.log(`Running on port ${port}.`)
})

module.exports = app