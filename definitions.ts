// This json data is directly scraped from Battlefield Portal

export const definitions = <const>{
    "objects": [
        {
            "name": "Global",
            "type": "Global",
            "deprecated": false,
            "displayNameSID": "PYRITE_OBJECT_GLOBAL"
        },
        {
            "name": "Player",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_OBJECT_PLAYER",
            "deprecated": false,
            "type": "Player"
        },
        {
            "name": "Team",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_OBJECT_TEAM",
            "deprecated": false,
            "type": "TeamId"
        }
    ],
    "events": [
        {
            "name": "Ongoing",
            "parameters": [],
            "deprecated": false,
            "displayNameSID": "PYRITE_EVENT_ONGOING"
        },
        {
            "name": "OnGameModeEnding",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONGAMEMODE",
            "parameters": [],
            "deprecated": false
        },
        {
            "name": "OnGameModeStarted",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONGAMEMODESTARTED",
            "parameters": [],
            "deprecated": false
        },
        {
            "name": "OnMandown",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONMANDOWN",
            "parameters": [
                "Player",
                "OtherPlayer"
            ],
            "deprecated": false
        },
        {
            "name": "OnPlayerDeployed",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONPLAYERDEPLOYED",
            "parameters": [
                "Player"
            ],
            "deprecated": false
        },
        {
            "name": "OnPlayerDied",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONPLAYERDIED",
            "parameters": [
                "Player",
                "OtherPlayer"
            ],
            "deprecated": false
        },
        {
            "name": "OnPlayerEarnedKill",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONPLAYEREARNEDKILL",
            "parameters": [
                "Player",
                "OtherPlayer"
            ],
            "deprecated": false
        },
        {
            "name": "OnPlayerIrreversiblyDead",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONPLAYERIRREVERSIBLYDEAD",
            "parameters": [
                "Player"
            ],
            "deprecated": false
        },
        {
            "name": "OnPlayerJoinGame",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONPLAYERJOINGAME",
            "parameters": [
                "Player"
            ],
            "deprecated": false
        },
        {
            "name": "OnPlayerLeaveGame",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONPLAYERLEAVEGAME",
            "parameters": [],
            "deprecated": false
        },
        {
            "name": "OnRevived",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONREVIVED",
            "parameters": [
                "Player",
                "OtherPlayer"
            ],
            "deprecated": false
        },
        {
            "name": "OnTimeLimitReached",
            "displayNameSID": "ID_ARRIVAL_MODBUILDER_EVENT_ONTIMELIMITREACHED",
            "parameters": [],
            "deprecated": false
        }
    ],
    "values": [
        {
            "name": "AbsoluteValue",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ABSOLUTEVALUE",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 41,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Add",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ADD",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 37,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "AllPlayers",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ALLPLAYERS",
            "category": "Player",
            "subCategory": "General",
            "deprecated": false,
            "dataIndex": 74,
            "functionSignatures": [
                {
                    "returnType": "Array",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "And",
            "displayNameSID": "ID_ARRIVAL_BLOCK_AND",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 88,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "AngleDifference",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ANGLEDIFFERENCE",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 42,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "AppendToArray",
            "displayNameSID": "ID_ARRIVAL_BLOCK_APPENDTOARRAY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 0,
            "functionSignatures": [
                {
                    "returnType": "Array",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "ArraySlice",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ARRAYSLICE",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 1,
            "functionSignatures": [
                {
                    "returnType": "Array",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "BackwardVector",
            "displayNameSID": "ID_ARRIVAL_BLOCK_BACKWARDVECTOR",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 43,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "CharacterGadgetsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CHARACTERGADGETSITEM",
            "deprecated": false,
            "dataIndex": 31,
            "functionSignatures": [
                {
                    "returnType": "Enum_CharacterGadgets",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ClosestPlayerTo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CLOSESTPLAYERTO",
            "category": "Player",
            "subCategory": "General",
            "deprecated": false,
            "dataIndex": 95,
            "functionSignatures": [
                {
                    "returnType": "Player",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Player",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "CosineFromDegrees",
            "displayNameSID": "ID_ARRIVAL_BLOCK_COSINEFROMDEGREES",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 44,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "CosineFromRadians",
            "displayNameSID": "ID_ARRIVAL_BLOCK_COSINEFROMRADIANS",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 45,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "CountOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_COUNTOF",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 2,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "CreateVector",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CREATEVECTOR",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 46,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "CrossProduct",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CROSSPRODUCT",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 47,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "CurrentArrayElement",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CURRENTARRAYELEMENT",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 3,
            "functionSignatures": [
                {
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "CustomMessagesItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CUSTOMMESSAGEITEM",
            "deprecated": false,
            "dataIndex": 24,
            "functionSignatures": [
                {
                    "returnType": "Enum_CustomMessages",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "DirectionFromAngles",
            "displayNameSID": "ID_ARRIVAL_BLOCK_DIRECTIONFROMANGLES",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 72,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "DirectionTowards",
            "displayNameSID": "ID_ARRIVAL_BLOCK_DIRECTIONTOWARDS",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 48,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "DistanceBetween",
            "displayNameSID": "ID_ARRIVAL_BLOCK_DISTANCEBETWEEN",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 49,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Divide",
            "displayNameSID": "ID_ARRIVAL_BLOCK_DIVIDE",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 50,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "DotProduct",
            "displayNameSID": "ID_ARRIVAL_BLOCK_DOTPRODUCT",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 51,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "DownVector",
            "displayNameSID": "ID_ARRIVAL_BLOCK_DOWNVECTOR",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 52,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "EmptyArray",
            "displayNameSID": "ID_ARRIVAL_BLOCK_EMPTYARRAY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 4,
            "functionSignatures": [
                {
                    "returnType": "Array",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "Equals",
            "displayNameSID": "ID_ARRIVAL_BLOCK_EQUALS",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 38,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": true,
                            "parameterTypes": []
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "EventOtherPlayer",
            "displayNameSID": "ID_ARRIVAL_BLOCK_EVENTOTHERPLAYER",
            "category": "Event Payloads",
            "deprecated": false,
            "dataIndex": 90,
            "eventParameter": "OtherPlayer",
            "functionSignatures": [
                {
                    "returnType": "Player",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "EventPlayer",
            "displayNameSID": "ID_ARRIVAL_BLOCK_EVENTPLAYER",
            "category": "Event Payloads",
            "deprecated": false,
            "dataIndex": 36,
            "eventParameter": "Player",
            "functionSignatures": [
                {
                    "returnType": "Player",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "EventTeam",
            "displayNameSID": "ID_ARRIVAL_BLOCK_EVENTTEAM",
            "category": "Event Payloads",
            "deprecated": false,
            "dataIndex": 92,
            "eventParameter": "TeamId",
            "functionSignatures": [
                {
                    "returnType": "TeamId",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "FactionsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FACTIONSITEM",
            "deprecated": false,
            "dataIndex": 35,
            "functionSignatures": [
                {
                    "returnType": "Enum_Factions",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "FarthestPlayerFrom",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FARTHESTPLAYERFROM",
            "category": "Player",
            "subCategory": "General",
            "deprecated": false,
            "dataIndex": 94,
            "functionSignatures": [
                {
                    "returnType": "Player",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Player",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "FilteredArray",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FILTEREDARRAY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 5,
            "functionSignatures": [
                {
                    "returnType": "Array",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "FirstOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FIRSTOF",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 6,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ForwardVector",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FORWARDVECTOR",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 53,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "GetGamemodeScore",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETGAMEMODESCORE",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 73,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GetInventoryAmmo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETINVENTORYAMMO",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 96,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_InventorySlots"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GetInventoryMagazineAmmo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETINVENTORYMAGAZINEAMMO",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 97,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_InventorySlots"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GetMatchTimeElapsed",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETMATCHTIMEELAPSED",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 81,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "GetPlayerDeaths",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETPLAYERDEATHS",
            "category": "Player",
            "subCategory": "General",
            "deprecated": false,
            "dataIndex": 91,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GetPlayerKills",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETPLAYERKILLS",
            "category": "Player",
            "subCategory": "General",
            "deprecated": false,
            "dataIndex": 98,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GetRoundTime",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETROUNDTIME",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 80,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "GetSoldierState",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETSOLDIERSTATE",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 100,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_SoldierStateNumber"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_SoldierStateBool"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_SoldierStateVector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GetTargetScore",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETTARGETSCORE",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 75,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "GetTeamId",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETTEAMID",
            "category": "Player",
            "subCategory": "General",
            "deprecated": false,
            "dataIndex": 40,
            "functionSignatures": [
                {
                    "returnType": "TeamId",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "TeamId",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GetVariable",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GETVARIABLE",
            "deprecated": false,
            "dataIndex": 16,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Variable"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GreaterThan",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GREATERTHAN",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 84,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "GreaterThanEqualTo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_GREATERTHANEQUALTO",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 85,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "HasInventory",
            "displayNameSID": "ID_ARRIVAL_BLOCK_HASINVENTORY",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 101,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_PrimaryWeapons"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_SecondaryWeapons"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_OpenGadgets"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_CharacterGadgets"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_Throwables"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_MeleeWeapons"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "IfThenElse",
            "displayNameSID": "ID_ARRIVAL_BLOCK_IFTHENELSE",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 19,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "IndexOfFirstTrue",
            "displayNameSID": "ID_ARRIVAL_BLOCK_INDEXOFFIRSTTRUE",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 15,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "InventorySlotsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_INVENTORYSLOTSITEM",
            "deprecated": false,
            "dataIndex": 22,
            "functionSignatures": [
                {
                    "returnType": "Enum_InventorySlots",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "IsFaction",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ISFACTION",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 99,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_Factions"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "IsInventorySlotActive",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ISINVENTORYSLOTACTIVE",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 102,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_InventorySlots"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "IsTrueForAll",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ISTRUEFORALL",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 7,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "IsTrueForAny",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ISTRUEFORANY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 13,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "IsUsingKit",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ISUSINGKIT",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 93,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_SoldierKits"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "LastOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_LASTOF",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 8,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "LeftVector",
            "displayNameSID": "ID_ARRIVAL_BLOCK_LEFTVECTOR",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 54,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "LessThan",
            "displayNameSID": "ID_ARRIVAL_BLOCK_LESSTHAN",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 39,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "LessThanEqualTo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_LESSTHANEQUALTO",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 83,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "LocalPositionOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_LOCALPOSITIONOF",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 78,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "LocalVectorOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_LOCALVECTOROF",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 79,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "MappedArray",
            "displayNameSID": "ID_ARRIVAL_BLOCK_MAPPEDARRAY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 9,
            "functionSignatures": [
                {
                    "returnType": "Array",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "Max",
            "displayNameSID": "ID_ARRIVAL_BLOCK_MAX",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 55,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "MedGadgetTypesItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_MEDGADGETTYPESITEM",
            "deprecated": false,
            "dataIndex": 34,
            "functionSignatures": [
                {
                    "returnType": "Enum_MedGadgetTypes",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "MeleeWeaponsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_MELEEWEAPONSITEM",
            "deprecated": false,
            "dataIndex": 33,
            "functionSignatures": [
                {
                    "returnType": "Enum_MeleeWeapons",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Message",
            "displayNameSID": "ID_ARRIVAL_BLOCK_MESSAGE",
            "category": "UI",
            "deprecated": false,
            "dataIndex": 82,
            "functionSignatures": [
                {
                    "returnType": "Message",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Message",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Message",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Message",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String",
                                "Number",
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Modulo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_MODULO",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 56,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Multiply",
            "displayNameSID": "ID_ARRIVAL_BLOCK_MULTIPLY",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 57,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Normalize",
            "displayNameSID": "ID_ARRIVAL_BLOCK_NORMALIZE",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 58,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Not",
            "displayNameSID": "ID_ARRIVAL_BLOCK_NOT",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 86,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "NotEqualTo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_NOTEQUALTO",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 87,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": true,
                            "parameterTypes": []
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "OpenGadgetsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_OPENGADGETSITEM",
            "deprecated": false,
            "dataIndex": 30,
            "functionSignatures": [
                {
                    "returnType": "Enum_OpenGadgets",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Or",
            "displayNameSID": "ID_ARRIVAL_BLOCK_OR",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 89,
            "functionSignatures": [
                {
                    "returnType": "Boolean",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "PrimaryWeaponsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_PRIMARYWEAPONSITEM",
            "deprecated": false,
            "dataIndex": 28,
            "functionSignatures": [
                {
                    "returnType": "Enum_PrimaryWeapons",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "RaiseToPower",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RAISETOPOWER",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 59,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "RandomizedArray",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RANDOMIZEDARRAY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 10,
            "functionSignatures": [
                {
                    "returnType": "Array",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "RandomReal",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RANDOMREAL",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 60,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "RandomValueInArray",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RANDOMVALUEINARRAY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 11,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "RestrictedInputsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RESTRICTEDINPUTSITEM",
            "deprecated": false,
            "dataIndex": 21,
            "functionSignatures": [
                {
                    "returnType": "Enum_RestrictedInputs",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ResupplyTypesItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RESUPPLYTYPESITEM",
            "deprecated": false,
            "dataIndex": 23,
            "functionSignatures": [
                {
                    "returnType": "Enum_ResupplyTypes",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "RightVector",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RIGHTVECTOR",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 61,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "RoundToInteger",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ROUNDTOINTEGER",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 62,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SecondaryWeaponsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SECONDARYWEAPONSITEM",
            "deprecated": false,
            "dataIndex": 29,
            "functionSignatures": [
                {
                    "returnType": "Enum_SecondaryWeapons",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SineFromDegrees",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SINEFROMDEGREES",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 63,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SineFromRadians",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SINEFROMRADIANS",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 64,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SoldierKitsItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SOLDIERKITSITEM",
            "deprecated": false,
            "dataIndex": 20,
            "functionSignatures": [
                {
                    "returnType": "Enum_SoldierKits",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SoldierStateBoolItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SOLDIERSTATEBOOLITEM",
            "deprecated": false,
            "dataIndex": 25,
            "functionSignatures": [
                {
                    "returnType": "Enum_SoldierStateBool",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SoldierStateNumberItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SOLDIERSTATENUMBERITEM",
            "deprecated": false,
            "dataIndex": 26,
            "functionSignatures": [
                {
                    "returnType": "Enum_SoldierStateNumber",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SoldierStateVectorItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SOLDIERSTATEVECTORITEM",
            "deprecated": false,
            "dataIndex": 27,
            "functionSignatures": [
                {
                    "returnType": "Enum_SoldierStateVector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SortedArray",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SORTEDARRAY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 14,
            "functionSignatures": [
                {
                    "returnType": "Array",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SquareRoot",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SQUAREROOT",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 65,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Subtract",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SUBTRACT",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 66,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                },
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ThrowablesItem",
            "displayNameSID": "ID_ARRIVAL_BLOCK_THROWABLESITEM",
            "deprecated": false,
            "dataIndex": 32,
            "functionSignatures": [
                {
                    "returnType": "Enum_Throwables",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "String"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "UpVector",
            "displayNameSID": "ID_ARRIVAL_BLOCK_UPVECTOR",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 67,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": []
                }
            ]
        },
        {
            "name": "ValueInArray",
            "displayNameSID": "ID_ARRIVAL_BLOCK_VALUEINARRAY",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 12,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Array"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "VectorTowards",
            "displayNameSID": "ID_ARRIVAL_BLOCK_VECTORTOWARDS",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 68,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "WorldPositionOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_WORLDPOSITIONOF",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 76,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "WorldVectorOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_WORLDVECTOROF",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 77,
            "functionSignatures": [
                {
                    "returnType": "Vector",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "XComponentOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_XCOMPONENTOF",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 69,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "YComponentOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_YCOMPONENTOF",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 70,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ZComponentOf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ZCOMPONENTOF",
            "category": "Math",
            "deprecated": false,
            "dataIndex": 71,
            "functionSignatures": [
                {
                    "returnType": "Number",
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "actions": [
        {
            "name": "Abort",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ABORT",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 6,
            "functionSignatures": []
        },
        {
            "name": "AbortIf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ABORTIF",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 7,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "AddSoldierWeapon",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ADDSOLDIERWEAPON",
            "category": "Player",
            "subCategory": "Inventory",
            "deprecated": false,
            "dataIndex": 23,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_PrimaryWeapons"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_SecondaryWeapons"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_OpenGadgets"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_CharacterGadgets"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_Throwables"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_MeleeWeapons"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ApplyMedGadget",
            "displayNameSID": "ID_ARRIVAL_BLOCK_APPLYMEDGADGET",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 62,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_MedGadgetTypes"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ChaseVariableAtRate",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CHASEVARIABLEATRATE",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 1,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Variable"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ChaseVariableOverTime",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CHASEVARIABLEOVERTIME",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 2,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Variable"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ClearAllCustomNotificationMessages",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CLEARALLCUSTOMNOTIFICATIONMESSAGES",
            "category": "UI",
            "subCategory": "Messages",
            "deprecated": false,
            "dataIndex": 58,
            "functionSignatures": [
                {
                    "parameterTypes": []
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ClearCustomNotificationMessage",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CLEARCUSTOMNOTIFICATIONMESSAGE",
            "category": "UI",
            "subCategory": "Messages",
            "deprecated": false,
            "dataIndex": 57,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_CustomMessages"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_CustomMessages"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_CustomMessages"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "DisplayCustomNotificationMessage",
            "displayNameSID": "ID_ARRIVAL_BLOCK_DISPLAYCUSTOMNOTIFICATIONMESSAGE",
            "category": "UI",
            "subCategory": "Messages",
            "deprecated": false,
            "dataIndex": 56,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Message"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_CustomMessages"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Message"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_CustomMessages"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player",
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "EnableAllInputRestrictions",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ENABLEALLINPUTRESTRICTIONS",
            "category": "Player",
            "subCategory": "Inputs",
            "deprecated": false,
            "dataIndex": 52,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "EnableDefaultScoring",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ENABLEDEFAULTSCORING",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 26,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "EnableDefaultWinCondition",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ENABLEDEFAULTWINCONDITION",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 32,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "EnableInputRestriction",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ENABLEINPUTRESTRICTION",
            "category": "Player",
            "subCategory": "Inputs",
            "deprecated": false,
            "dataIndex": 47,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_RestrictedInputs"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "EnablePlayerSpawning",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ENABLEPLAYERSPAWNING",
            "category": "Gameplay",
            "subCategory": "Deploy",
            "deprecated": false,
            "dataIndex": 36,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "EnableVOMessaging",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ENABLEVOMESSAGING",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 61,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "EndRound",
            "displayNameSID": "ID_ARRIVAL_BLOCK_ENDROUND",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 22,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ForceManDown",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FORCEMANDOWN",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 38,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ForceRevive",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FORCEREVIVE",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 49,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ForceSpawnAllPlayers",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FORCESPAWNALLPLAYERS",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 35,
            "functionSignatures": []
        },
        {
            "name": "ForceSwitchInventory",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FORCESWITCHINVENTORY",
            "category": "Player",
            "subCategory": "Inventory",
            "deprecated": false,
            "dataIndex": 54,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_InventorySlots"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Kill",
            "displayNameSID": "ID_ARRIVAL_BLOCK_KILL",
            "category": "Gameplay",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 37,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "PauseRoundTime",
            "displayNameSID": "ID_ARRIVAL_BLOCK_PAUSEROUNDTIME",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 28,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ResetRoundTime",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RESETROUNDTIME",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 55,
            "functionSignatures": []
        },
        {
            "name": "Resupply",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RESUPPLY",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 50,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_ResupplyTypes"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetGamemodeScore",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETGAMEMODESCORE",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 24,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetHeal",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETHEAL",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 39,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetInventoryAmmo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETINVENTORYAMMO",
            "category": "Player",
            "subCategory": "Inventory",
            "deprecated": false,
            "dataIndex": 59,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_InventorySlots"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetInventoryMagazineAmmo",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETINVENTORYMAGAZINEAMMO",
            "category": "Player",
            "subCategory": "Inventory",
            "deprecated": false,
            "dataIndex": 60,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_InventorySlots"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetPlayerDamage",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETPLAYERDAMAGE",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 40,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetPlayerKit",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETPLAYERKIT",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 51,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Enum_SoldierKits"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetPlayerMaxHealth",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETPLAYERMAXHEALTH",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 53,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetRedeployTime",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETREDEPLOYTIME",
            "category": "Gameplay",
            "subCategory": "Deploy",
            "deprecated": false,
            "dataIndex": 46,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetRoundTimeLimit",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETROUNDTIMELIMIT",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 27,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetSpawnOverride",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETSPAWNOVERRIDE",
            "category": "Gameplay",
            "subCategory": "Deploy",
            "deprecated": false,
            "dataIndex": 41,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetTargetScore",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETTARGETSCORE",
            "category": "Gameplay",
            "subCategory": "Gamemode",
            "deprecated": false,
            "dataIndex": 25,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetTeam",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETTEAM",
            "category": "Gameplay",
            "subCategory": "General",
            "deprecated": false,
            "dataIndex": 42,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetVariable",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETVARIABLE",
            "deprecated": false,
            "dataIndex": 4,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Variable"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "SetVariableAtIndex",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SETVARIABLEATINDEX",
            "category": "Arrays",
            "deprecated": false,
            "dataIndex": 0,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Variable"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": true,
                            "parameterTypes": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "ShowEventGameModeMessage",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SHOWEVENTGAMEMODEMESSAGE",
            "category": "UI",
            "subCategory": "Messages",
            "deprecated": false,
            "dataIndex": 43,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Message"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Message"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player",
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ShowHighlightedGameModeMessage",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SHOWHIGHLIGHTEDGAMEMODEMESSAGE",
            "category": "UI",
            "subCategory": "Messages",
            "deprecated": false,
            "dataIndex": 44,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Message"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Message"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player",
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "ShowNotificationMessage",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SHOWNOTIFICATIONMESSAGE",
            "category": "UI",
            "subCategory": "Messages",
            "deprecated": false,
            "dataIndex": 29,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Message"
                            ]
                        }
                    ]
                },
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Message"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player",
                                "TeamId"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Skip",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SKIP",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 8,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SkipIf",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SKIPIF",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 9,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SkipManDown",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SKIPMANDOWN",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 45,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "SpotTarget",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SPOTTARGET",
            "category": "Gameplay",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 30,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "StopChasingVariable",
            "displayNameSID": "ID_ARRIVAL_BLOCK_STOPCHASINGVARIABLE",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 3,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Variable"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Teleport",
            "displayNameSID": "ID_ARRIVAL_BLOCK_TELEPORT",
            "category": "Player",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 48,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Vector"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "UnspawnAllPlayers",
            "displayNameSID": "ID_ARRIVAL_BLOCK_UNSPAWNALLPLAYERS",
            "category": "Gameplay",
            "subCategory": "Deploy",
            "deprecated": false,
            "dataIndex": 34,
            "functionSignatures": []
        },
        {
            "name": "UnspawnPlayer",
            "displayNameSID": "ID_ARRIVAL_BLOCK_UNSPAWNPLAYER",
            "category": "Gameplay",
            "subCategory": "Deploy",
            "deprecated": false,
            "dataIndex": 33,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "UnspotTarget",
            "displayNameSID": "ID_ARRIVAL_BLOCK_UNSPOTTARGET",
            "category": "Gameplay",
            "subCategory": "Soldier",
            "deprecated": false,
            "dataIndex": 31,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Player"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Wait",
            "displayNameSID": "ID_ARRIVAL_BLOCK_WAIT",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 10,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "WaitUntil",
            "displayNameSID": "ID_ARRIVAL_BLOCK_WAITUNTIL",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 11,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "selectionLists": [
        {
            "name": "BF1942_GER",
            "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG620480178",
            "listType": "SoldierKits",
            "selectionValues": [
                {
                    "name": "GERAntiTankGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ANTITANK"
                },
                {
                    "name": "GERAssaultGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ASSAULT"
                },
                {
                    "name": "GEREngineerGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ENGINEER"
                },
                {
                    "name": "GERMedicGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_MEDIC"
                },
                {
                    "name": "GERScoutGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_SCOUT"
                }
            ],
            "returnType": "Enum_SoldierKits"
        },
        {
            "name": "BF1942_UK",
            "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG929856448",
            "listType": "SoldierKits",
            "selectionValues": [
                {
                    "name": "UKAntiTankGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ANTITANK"
                },
                {
                    "name": "UKAssaultGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ASSAULT"
                },
                {
                    "name": "UKEngineerGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ENGINEER"
                },
                {
                    "name": "UKMedicGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_MEDIC"
                },
                {
                    "name": "UKScoutGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_SCOUT"
                }
            ],
            "returnType": "Enum_SoldierKits"
        },
        {
            "name": "BF1942_US",
            "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG620490983",
            "listType": "SoldierKits",
            "selectionValues": [
                {
                    "name": "USAntiTankGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ANTITANK"
                },
                {
                    "name": "USAssaultGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ASSAULT"
                },
                {
                    "name": "USEngineerGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_ENGINEER"
                },
                {
                    "name": "USMedicGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_MEDIC"
                },
                {
                    "name": "USScoutGRA",
                    "displayNameSID": "ID_MICA_KIT_GRAFTON_SCOUT"
                }
            ],
            "returnType": "Enum_SoldierKits"
        },
        {
            "name": "BF2042",
            "displayNameSID": "ID_MICA_MENU_KINGSTON",
            "listType": "SoldierKits",
            "selectionValues": [
                {
                    "name": "Bravo",
                    "displayNameSID": "ID_COS_BRAVO_01"
                },
                {
                    "name": "Charlie",
                    "displayNameSID": "ID_COS_CHARLIE_01"
                },
                {
                    "name": "Delta",
                    "displayNameSID": "ID_COS_DELTA_01"
                },
                {
                    "name": "Foxtrot",
                    "displayNameSID": "ID_COS_FOXTROT_01"
                },
                {
                    "name": "India",
                    "displayNameSID": "ID_COS_INDIA_01"
                },
                {
                    "name": "Juliet",
                    "displayNameSID": "ID_COS_JULIET_01"
                },
                {
                    "name": "Kilo",
                    "displayNameSID": "ID_COS_KILO_01"
                },
                {
                    "name": "Lima",
                    "displayNameSID": "ID_COS_LIMA_01"
                }
            ],
            "returnType": "Enum_SoldierKits"
        },
        {
            "name": "BF3_RU",
            "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1538019529",
            "listType": "SoldierKits",
            "selectionValues": [
                {
                    "name": "RUAssaultALX",
                    "displayNameSID": "ID_MICA_KIT_ALEXANDRIA_ASSAULT"
                },
                {
                    "name": "RUEngineerALX",
                    "displayNameSID": "ID_MICA_KIT_ALEXANDRIA_ENGINEER"
                },
                {
                    "name": "RUReconALX",
                    "displayNameSID": "ID_MICA_KIT_ALEXANDRIA_RECON"
                },
                {
                    "name": "RUSupportALX",
                    "displayNameSID": "ID_MICA_KIT_ALEXANDRIA_SUPPORT"
                }
            ],
            "returnType": "Enum_SoldierKits"
        },
        {
            "name": "BF3_US",
            "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1538018332",
            "listType": "SoldierKits",
            "selectionValues": [
                {
                    "name": "USAssaultALX",
                    "displayNameSID": "ID_MICA_KIT_ALEXANDRIA_ASSAULT"
                },
                {
                    "name": "USEngineerALX",
                    "displayNameSID": "ID_MICA_KIT_ALEXANDRIA_ENGINEER"
                },
                {
                    "name": "USReconALX",
                    "displayNameSID": "ID_MICA_KIT_ALEXANDRIA_RECON"
                },
                {
                    "name": "USSupportALX",
                    "displayNameSID": "ID_MICA_KIT_ALEXANDRIA_SUPPORT"
                }
            ],
            "returnType": "Enum_SoldierKits"
        },
        {
            "name": "BFBC2_RU",
            "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1812726317",
            "listType": "SoldierKits",
            "selectionValues": [
                {
                    "name": "RUAssaultRUM",
                    "displayNameSID": "ID_MICA_TEST_KIT_RUMNEY_ASSAULT"
                },
                {
                    "name": "RUEngineerRUM",
                    "displayNameSID": "ID_MICA_TEST_KIT_RUMNEY_ENGINEER"
                },
                {
                    "name": "RUMedicRUM",
                    "displayNameSID": "ID_MICA_TEST_KIT_RUMNEY_MEDIC"
                },
                {
                    "name": "RUReconRUM",
                    "displayNameSID": "ID_MICA_TEST_KIT_RUMNEY_RECON"
                }
            ],
            "returnType": "Enum_SoldierKits"
        },
        {
            "name": "BFBC2_US",
            "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1812729600",
            "listType": "SoldierKits",
            "selectionValues": [
                {
                    "name": "USAssaultRUM",
                    "displayNameSID": "ID_MICA_TEST_KIT_RUMNEY_ASSAULT"
                },
                {
                    "name": "USEngineerRUM",
                    "displayNameSID": "ID_MICA_TEST_KIT_RUMNEY_ENGINEER"
                },
                {
                    "name": "USMedicRUM",
                    "displayNameSID": "ID_MICA_TEST_KIT_RUMNEY_MEDIC"
                },
                {
                    "name": "USReconRUM",
                    "displayNameSID": "ID_MICA_TEST_KIT_RUMNEY_RECON"
                }
            ],
            "returnType": "Enum_SoldierKits"
        },
        {
            "name": "CharacterGadgetsAlexandria",
            "displayNameSID": "ID_MICA_MENU_BF3",
            "listType": "CharacterGadgets",
            "selectionValues": [
                {
                    "name": "AmmoBag_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_AMMO_BOX"
                },
                {
                    "name": "MedicBag_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_MEDKIT"
                },
                {
                    "name": "RepairTool_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_REPAIR_TOOL"
                },
                {
                    "name": "TUGS",
                    "displayNameSID": "ID_MICA_ABILITY_TUGS"
                }
            ],
            "returnType": "Enum_CharacterGadgets"
        },
        {
            "name": "CharacterGadgetsGrafton",
            "displayNameSID": "ID_MICA_MENU_1942",
            "listType": "CharacterGadgets",
            "selectionValues": [
                {
                    "name": "Binoculars",
                    "displayNameSID": "ID_MICA_ABILITY_BINOCULARS"
                },
                {
                    "name": "MedKit_GRA",
                    "displayNameSID": "ID_MICA_ABILITY_MEDKIT"
                },
                {
                    "name": "RepairTool_GRA",
                    "displayNameSID": "ID_MICA_ABILITY_WRENCH"
                }
            ],
            "returnType": "Enum_CharacterGadgets"
        },
        {
            "name": "CharacterGadgetsKingston",
            "displayNameSID": "ID_MICA_MENU_KINGSTON",
            "listType": "CharacterGadgets",
            "selectionValues": [
                {
                    "name": "AutoTurret",
                    "displayNameSID": "ID_GADGETS_AUTOTURRET"
                },
                {
                    "name": "BallisticShield",
                    "displayNameSID": "ID_ABILITY_SHIELD"
                },
                {
                    "name": "ConstructionKit",
                    "displayNameSID": "ID_GADGETS_CONSTRUCTIONKIT"
                },
                {
                    "name": "GrappleGun",
                    "displayNameSID": "ID_GADGETS_GRAPPLEGUN"
                },
                {
                    "name": "ReconDrone",
                    "displayNameSID": "ID_GADGETS_RECONDRONE"
                },
                {
                    "name": "SignalHacker",
                    "displayNameSID": "ID_ABILITY_SIGNALHACKER"
                },
                {
                    "name": "SmartExplosives",
                    "displayNameSID": "ID_GADGETS_SMARTEXPLOSIVES"
                },
                {
                    "name": "StimPistol",
                    "displayNameSID": "ID_GADGETS_STIMPISTOL"
                },
                {
                    "name": "SupplyBag",
                    "displayNameSID": "ID_GADGETS_SUPPLYBAG"
                }
            ],
            "returnType": "Enum_CharacterGadgets"
        },
        {
            "name": "CharacterGadgetsRumney",
            "displayNameSID": "ID_MICA_MENU_BC2",
            "listType": "CharacterGadgets",
            "selectionValues": [
                {
                    "name": "AmmoBox_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_AMMO_BOX"
                },
                {
                    "name": "MedKit",
                    "displayNameSID": "ID_MICA_ABILITY_MEDKIT"
                },
                {
                    "name": "MotionSensor",
                    "displayNameSID": "ID_MICA_ABILITY_MOTION_SENSOR_GRENADE"
                },
                {
                    "name": "RepairTool_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_REPAIR_TOOL"
                }
            ],
            "returnType": "Enum_CharacterGadgets"
        },
        {
            "name": "CustomMessages",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CUSTOMMESSAGEITEM",
            "listType": "CustomMessages",
            "selectionValues": [
                {
                    "name": "HeaderText",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_CUSTOMMESSAGES_HEADERTEXT"
                },
                {
                    "name": "MessageText1",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_CUSTOMMESSAGES_MESSAGETEXT1"
                },
                {
                    "name": "MessageText2",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_CUSTOMMESSAGES_MESSAGETEXT2"
                },
                {
                    "name": "MessageText3",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_CUSTOMMESSAGES_MESSAGETEXT3"
                },
                {
                    "name": "MessageText4",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_CUSTOMMESSAGES_MESSAGETEXT4"
                }
            ],
            "returnType": "Enum_CustomMessages"
        },
        {
            "name": "Factions",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FACTIONSITEM",
            "listType": "Factions",
            "selectionValues": [
                {
                    "name": "Alexandria_RU",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1538019529"
                },
                {
                    "name": "Alexandria_US",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1538018332"
                },
                {
                    "name": "Grafton_GER",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG620480178"
                },
                {
                    "name": "Grafton_UK",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG929856448"
                },
                {
                    "name": "Grafton_US",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG620490983"
                },
                {
                    "name": "Kingston_RU",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1345154873"
                },
                {
                    "name": "Kingston_US",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_753847964"
                },
                {
                    "name": "Rumney_RU",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1812726317"
                },
                {
                    "name": "Rumney_US",
                    "displayNameSID": "ID_ARRIVAL_MUTATOR_548273204_ENTRY_NEG1812729600"
                }
            ],
            "returnType": "Enum_Factions"
        },
        {
            "name": "InventorySlots",
            "displayNameSID": "ID_ARRIVAL_BLOCK_INVENTORYSLOTSITEM",
            "listType": "InventorySlots",
            "selectionValues": [
                {
                    "name": "CharacterGadget",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_INVENTORYSLOTS_CHARACTERGADGET"
                },
                {
                    "name": "MeleeWeapon",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_INVENTORYSLOTS_MELEEWEAPON"
                },
                {
                    "name": "OpenGadget",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_INVENTORYSLOTS_OPENGADGET"
                },
                {
                    "name": "PrimaryWeapon",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_INVENTORYSLOTS_PRIMARYWEAPON"
                },
                {
                    "name": "SecondaryWeapon",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_INVENTORYSLOTS_SECONDARYWEAPON"
                },
                {
                    "name": "Throwable",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_INVENTORYSLOTS_THROWABLE"
                }
            ],
            "returnType": "Enum_InventorySlots"
        },
        {
            "name": "MedGadgetTypes",
            "displayNameSID": "ID_ARRIVAL_BLOCK_MEDGADGETTYPESITEM",
            "listType": "MedGadgetTypes",
            "selectionValues": [
                {
                    "name": "MedicCrate",
                    "displayNameSID": "ID_ABILITY_MEDICCRATE"
                },
                {
                    "name": "MedKit",
                    "displayNameSID": "ID_MICA_ABILITY_MEDKIT"
                }
            ],
            "returnType": "Enum_MedGadgetTypes"
        },
        {
            "name": "MeleeAlexandria",
            "displayNameSID": "ID_MICA_MENU_BF3",
            "listType": "MeleeWeapons",
            "selectionValues": [
                {
                    "name": "Knife_BF3",
                    "displayNameSID": "ID_COS_WEP_MELEE__BF3KNIFE_01"
                }
            ],
            "returnType": "Enum_MeleeWeapons"
        },
        {
            "name": "MeleeGrafton",
            "displayNameSID": "ID_MICA_MENU_1942",
            "listType": "MeleeWeapons",
            "selectionValues": [
                {
                    "name": "Knife_1942",
                    "displayNameSID": "ID_COS_WEP_MELEE__1942KNIFE_01"
                }
            ],
            "returnType": "Enum_MeleeWeapons"
        },
        {
            "name": "MeleeKingston",
            "displayNameSID": "ID_MICA_MENU_KINGSTON",
            "listType": "MeleeWeapons",
            "selectionValues": [
                {
                    "name": "ACB90Knife",
                    "displayNameSID": "ID_COS_MELEE_ACB90KNIFE"
                },
                {
                    "name": "Hatchet",
                    "displayNameSID": "ID_COS_MELEE_BF1HATCHET"
                },
                {
                    "name": "SkeletonizedKnife",
                    "displayNameSID": "ID_COS_MELEE_SKELETONIZEDKNIFE"
                },
                {
                    "name": "SurvivalKnife",
                    "displayNameSID": "ID_COS_MELEE_SURVIVALKNIFE"
                },
                {
                    "name": "TacticalFoldingKnife",
                    "displayNameSID": "ID_COS_MELEE_TACTICALFOLDINGKNIFE"
                }
            ],
            "returnType": "Enum_MeleeWeapons"
        },
        {
            "name": "MeleeRumney",
            "displayNameSID": "ID_MICA_MENU_BC2",
            "listType": "MeleeWeapons",
            "selectionValues": [
                {
                    "name": "Knife_BC2",
                    "displayNameSID": "ID_COS_WEP_MELEE__BC2KNIFE_01"
                }
            ],
            "returnType": "Enum_MeleeWeapons"
        },
        {
            "name": "OpenGadgetsAlexandria",
            "displayNameSID": "ID_MICA_MENU_BF3",
            "listType": "OpenGadgets",
            "selectionValues": [
                {
                    "name": "ATMine_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_AT_MINE"
                },
                {
                    "name": "C4_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_C4"
                },
                {
                    "name": "Defibrillator_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_DEFIBRILLATOR"
                },
                {
                    "name": "EODBot",
                    "displayNameSID": "ID_MICA_ABILITY_EODBOT"
                },
                {
                    "name": "FGM148Javelin",
                    "displayNameSID": "ID_MICA_ABILITY_JAVELIN"
                },
                {
                    "name": "FIM92Stinger",
                    "displayNameSID": "ID_MICA_ABILITY_FIM92STINGER"
                },
                {
                    "name": "M18Claymore",
                    "displayNameSID": "ID_MICA_ABILITY_M18_CLAYMORE"
                },
                {
                    "name": "RadioBeacon",
                    "displayNameSID": "ID_MICA_ABILITY_RADIO_BEACON"
                },
                {
                    "name": "SA18IGLA",
                    "displayNameSID": "ID_MICA_ABILITY_SA-18IGLA"
                },
                {
                    "name": "SMAW",
                    "displayNameSID": "ID_MICA_ABILITY_SMAW"
                },
                {
                    "name": "SOFLAM_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_SOFLAM"
                }
            ],
            "returnType": "Enum_OpenGadgets"
        },
        {
            "name": "OpenGadgetsGrafton",
            "displayNameSID": "ID_MICA_MENU_1942",
            "listType": "OpenGadgets",
            "selectionValues": [
                {
                    "name": "Landmine",
                    "displayNameSID": "ID_MICA_ABILITY_TELLERMINE"
                }
            ],
            "returnType": "Enum_OpenGadgets"
        },
        {
            "name": "OpenGadgetsKingston",
            "displayNameSID": "ID_MICA_MENU_KINGSTON",
            "listType": "OpenGadgets",
            "selectionValues": [
                {
                    "name": "AmmoCrate",
                    "displayNameSID": "ID_ABILITY_AMMOBAG"
                },
                {
                    "name": "ArmorPiece",
                    "displayNameSID": "ID_ABILITY_ARMOR"
                },
                {
                    "name": "ATMine",
                    "displayNameSID": "ID_ABILITY_ATMINE"
                },
                {
                    "name": "C4",
                    "displayNameSID": "ID_ABILITY_C4"
                },
                {
                    "name": "CarlGustav",
                    "displayNameSID": "ID_ABILITY_CGMK4"
                },
                {
                    "name": "HealthCrate",
                    "displayNameSID": "ID_ABILITY_MEDICCRATE"
                },
                {
                    "name": "RepairTool",
                    "displayNameSID": "ID_GADGETS_REPAIRTOOL"
                },
                {
                    "name": "SelfHeal",
                    "displayNameSID": "ID_ABILITY_SELFHEAL"
                },
                {
                    "name": "SOFLAM",
                    "displayNameSID": "ID_ABILITY_SOFLAM"
                },
                {
                    "name": "SpawnBeacon",
                    "displayNameSID": "ID_ABILITY_SPAWNBEACON"
                },
                {
                    "name": "Stinger",
                    "displayNameSID": "ID_ABILITY_STINGER"
                }
            ],
            "returnType": "Enum_OpenGadgets"
        },
        {
            "name": "OpenGadgetsRumney",
            "displayNameSID": "ID_MICA_MENU_BC2",
            "listType": "OpenGadgets",
            "selectionValues": [
                {
                    "name": "ATMine_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_AT_MINE"
                },
                {
                    "name": "C4_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_C4"
                },
                {
                    "name": "Defibrillator_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_DEFIBRILLATOR"
                },
                {
                    "name": "M136AT4",
                    "displayNameSID": "ID_MICA_ABILITY_M136AT4"
                },
                {
                    "name": "MortarStrike",
                    "displayNameSID": "ID_MICA_ABILITY_MORTAR_STRIKE"
                },
                {
                    "name": "RPG7_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_RPG7"
                }
            ],
            "returnType": "Enum_OpenGadgets"
        },
        {
            "name": "PrimaryWeaponsAlexandria",
            "displayNameSID": "ID_MICA_MENU_BF3",
            "listType": "PrimaryWeapons",
            "selectionValues": [
                {
                    "name": "A-91",
                    "displayNameSID": "ID_MICA_ABILITY_A-91"
                },
                {
                    "name": "ACW-R",
                    "displayNameSID": "ID_MICA_ABILITY_ACW-R"
                },
                {
                    "name": "AKS-74u_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_AKS74U"
                },
                {
                    "name": "AN94_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_AN94"
                },
                {
                    "name": "ASVal",
                    "displayNameSID": "ID_MICA_ABILITY_ASVAL"
                },
                {
                    "name": "DAO-12",
                    "displayNameSID": "ID_MICA_ABILITY_DAO12"
                },
                {
                    "name": "G3A3",
                    "displayNameSID": ""
                },
                {
                    "name": "M16A3",
                    "displayNameSID": "ID_MICA_ABILITY_M16A3"
                },
                {
                    "name": "M240B",
                    "displayNameSID": "ID_MICA_ABILITY_M240B"
                },
                {
                    "name": "M39EMR",
                    "displayNameSID": "ID_MICA_ABILITY_M39EMR"
                },
                {
                    "name": "M416_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_M416"
                },
                {
                    "name": "M60E4",
                    "displayNameSID": "ID_MICA_ABILITY_M60E4"
                },
                {
                    "name": "M98B",
                    "displayNameSID": "ID_MICA_ABILITY_M98B"
                },
                {
                    "name": "P90",
                    "displayNameSID": "ID_MICA_ABILITY_P90"
                },
                {
                    "name": "PP2000_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_PP2000"
                },
                {
                    "name": "SCAR-H",
                    "displayNameSID": "ID_MICA_ABILITY_SCARH"
                },
                {
                    "name": "SPAS12_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_SPAS12"
                },
                {
                    "name": "SVD",
                    "displayNameSID": "ID_MICA_ABILITY_SVD"
                },
                {
                    "name": "Type88_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_TYPE88"
                }
            ],
            "returnType": "Enum_PrimaryWeapons"
        },
        {
            "name": "PrimaryWeaponsGrafton",
            "displayNameSID": "ID_MICA_MENU_1942",
            "listType": "PrimaryWeapons",
            "selectionValues": [
                {
                    "name": "BAR1918",
                    "displayNameSID": "ID_MICA_ABILITY_BAR1918"
                },
                {
                    "name": "Bazooka",
                    "displayNameSID": "ID_MICA_ABILITY_BAZOOKA"
                },
                {
                    "name": "K98",
                    "displayNameSID": "ID_MICA_ABILITY_K98K"
                },
                {
                    "name": "K98 Sniper",
                    "displayNameSID": "ID_MICA_ABILITY_K98SNIPER"
                },
                {
                    "name": "LeeEnfieldNo4",
                    "displayNameSID": "ID_MICA_ABILITY_NO4S"
                },
                {
                    "name": "M1_GRA",
                    "displayNameSID": "ID_MICA_ABILITY_M1GARAND"
                },
                {
                    "name": "MP40",
                    "displayNameSID": "ID_MICA_ABILITY_MP40"
                },
                {
                    "name": "Panzerschreck",
                    "displayNameSID": "ID_MICA_ABILITY_PANZERSHRECK"
                },
                {
                    "name": "STG44",
                    "displayNameSID": "ID_MICA_ABILITY_STG44"
                },
                {
                    "name": "Thompson_GRA",
                    "displayNameSID": "ID_MICA_ABILITY_THOMPSON"
                }
            ],
            "returnType": "Enum_PrimaryWeapons"
        },
        {
            "name": "PrimaryWeaponsKingston",
            "displayNameSID": "ID_MICA_MENU_KINGSTON",
            "listType": "PrimaryWeapons",
            "selectionValues": [
                {
                    "name": "AC74",
                    "displayNameSID": "ID_ABILITY_NBR"
                },
                {
                    "name": "AK12",
                    "displayNameSID": "ID_ABILITY_AK12"
                },
                {
                    "name": "Chukavin",
                    "displayNameSID": "ID_ABILITY_CHUKAVIN"
                },
                {
                    "name": "DDM4",
                    "displayNameSID": "ID_ABILITY_DDM4"
                },
                {
                    "name": "DSR1",
                    "displayNameSID": "ID_ABILITY_DSR1"
                },
                {
                    "name": "Keltec",
                    "displayNameSID": "ID_ABILITY_KELTEC"
                },
                {
                    "name": "KrissVector",
                    "displayNameSID": "ID_ABILITY_KRISS_VECTOR"
                },
                {
                    "name": "LAMG",
                    "displayNameSID": "ID_ABILITY_LAMG"
                },
                {
                    "name": "Marlin",
                    "displayNameSID": "ID_ABILITY_MARLIN"
                },
                {
                    "name": "MP9",
                    "displayNameSID": "ID_ABILITY_MP9"
                },
                {
                    "name": "NTW20",
                    "displayNameSID": "ID_ABILITY_NTW20"
                },
                {
                    "name": "Pecheneg",
                    "displayNameSID": "ID_ABILITY_PECHENEG"
                },
                {
                    "name": "PP-19 Bizon",
                    "displayNameSID": "ID_ABILITY_BIZON"
                },
                {
                    "name": "Remington870",
                    "displayNameSID": "ID_ABILITY_REMINGTON"
                },
                {
                    "name": "Saiga12",
                    "displayNameSID": "ID_ABILITY_SAIGA12"
                },
                {
                    "name": "SCAR MK17",
                    "displayNameSID": "ID_ABILITY_SCARMK17"
                },
                {
                    "name": "SLX Spear",
                    "displayNameSID": "ID_ABILITY_SLXSPEAR"
                },
                {
                    "name": "SMG45",
                    "displayNameSID": "ID_ABILITY_SMG45"
                },
                {
                    "name": "TRGM10",
                    "displayNameSID": "ID_ABILITY_TRGM10"
                }
            ],
            "returnType": "Enum_PrimaryWeapons"
        },
        {
            "name": "PrimaryWeaponsRumney",
            "displayNameSID": "ID_MICA_MENU_BC2",
            "listType": "PrimaryWeapons",
            "selectionValues": [
                {
                    "name": "AKS-74u_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_AKS74U"
                },
                {
                    "name": "AN94_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_AN94"
                },
                {
                    "name": "G3",
                    "displayNameSID": "ID_MICA_ABILITY_G3"
                },
                {
                    "name": "GOL",
                    "displayNameSID": "ID_MICA_ABILITY_GOL"
                },
                {
                    "name": "M1_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_M1GARAND"
                },
                {
                    "name": "M16A2",
                    "displayNameSID": "ID_MICA_ABILITY_M16A2"
                },
                {
                    "name": "M24",
                    "displayNameSID": "ID_MICA_ABILITY_M24"
                },
                {
                    "name": "M416_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_M416"
                },
                {
                    "name": "M60",
                    "displayNameSID": "ID_MICA_ABILITY_M60"
                },
                {
                    "name": "PP2000_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_PP2000"
                },
                {
                    "name": "SPAS12_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_SPAS12"
                },
                {
                    "name": "Thompson_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_THOMPSON"
                },
                {
                    "name": "Type88_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_TYPE88"
                },
                {
                    "name": "XM8",
                    "displayNameSID": "ID_MICA_ABILITY_XM8"
                },
                {
                    "name": "XM8C",
                    "displayNameSID": "ID_MICA_ABILITY_XM8C"
                },
                {
                    "name": "XM8L",
                    "displayNameSID": "ID_MICA_ABILITY_XM8L"
                }
            ],
            "returnType": "Enum_PrimaryWeapons"
        },
        {
            "name": "RestrictedInputs",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RESTRICTEDINPUTSITEM",
            "listType": "RestrictedInputs",
            "selectionValues": [
                {
                    "name": "CameraPitch",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_CAMERAPITCH"
                },
                {
                    "name": "CameraYaw",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_CAMERAYAW"
                },
                {
                    "name": "Crouch",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_CROUCH"
                },
                {
                    "name": "CycleAbilityDown",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_INPUTS_CYCLEABILITYDOWN"
                },
                {
                    "name": "CycleAbilityUp",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_INPUTS_CYCLEABILITYUP"
                },
                {
                    "name": "CycleFire",
                    "displayNameSID": "ID_CONCEPT_CYCLEFIREMODE"
                },
                {
                    "name": "CyclePrimary",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_CYCLEPRIMARY"
                },
                {
                    "name": "CycleSecondary",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_CYCLESECONDARY"
                },
                {
                    "name": "FireWeapon",
                    "displayNameSID": "ID_CONCEPT_FIRE"
                },
                {
                    "name": "Interact",
                    "displayNameSID": "ID_CONCEPT_INTERACT"
                },
                {
                    "name": "Jump",
                    "displayNameSID": "ID_CONCEPT_JUMP"
                },
                {
                    "name": "MoveForwardBack",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_MOVEFORWARDBACK"
                },
                {
                    "name": "MoveLeftRight",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_MOVELEFTRIGHT"
                },
                {
                    "name": "Prone",
                    "displayNameSID": "ID_CONCEPT_PRONE"
                },
                {
                    "name": "Reload",
                    "displayNameSID": "ID_CONCEPT_RELOAD"
                },
                {
                    "name": "SelectCharacterGadget",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_SELECTCHARACTERGADGET"
                },
                {
                    "name": "SelectMelee",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_SELECTMELEE"
                },
                {
                    "name": "SelectOpenGadget",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_SELECTOPENGADGET"
                },
                {
                    "name": "SelectPrimary",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_SELECTPRIMARY"
                },
                {
                    "name": "SelectSecondary",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_SELECTSECONDARY"
                },
                {
                    "name": "SelectThrowable",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_RESTRICTEDINPUTS_SELECTTHROWABLE"
                },
                {
                    "name": "Sprint",
                    "displayNameSID": "ID_CONCEPT_SPRINT"
                },
                {
                    "name": "Zoom",
                    "displayNameSID": "ID_CONCEPT_ZOOM"
                }
            ],
            "returnType": "Enum_RestrictedInputs"
        },
        {
            "name": "ResupplyTypes",
            "displayNameSID": "ID_ARRIVAL_BLOCK_RESUPPLYTYPESITEM",
            "listType": "ResupplyTypes",
            "selectionValues": [
                {
                    "name": "AmmoBox",
                    "displayNameSID": "ID_MICA_ABILITY_AMMO_BOX"
                },
                {
                    "name": "AmmoCrate",
                    "displayNameSID": "ID_ABILITY_AMMOBAG"
                },
                {
                    "name": "SupplyBag",
                    "displayNameSID": "ID_GADGETS_SUPPLYBAG"
                }
            ],
            "returnType": "Enum_ResupplyTypes"
        },
        {
            "name": "SecondaryWeaponsAlexandria",
            "displayNameSID": "ID_MICA_MENU_BF3",
            "listType": "SecondaryWeapons",
            "selectionValues": [
                {
                    "name": "M1911_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_COLTM1911"
                },
                {
                    "name": "M93R_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_M93R"
                },
                {
                    "name": "MP412REX_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_MP412REX"
                },
                {
                    "name": "MP443_ALX",
                    "displayNameSID": "ID_MICA_ABILITY_MP443"
                }
            ],
            "returnType": "Enum_SecondaryWeapons"
        },
        {
            "name": "SecondaryWeaponsGrafton",
            "displayNameSID": "ID_MICA_MENU_1942",
            "listType": "SecondaryWeapons",
            "selectionValues": [
                {
                    "name": "M1911_GRA",
                    "displayNameSID": "ID_MICA_ABILITY_COLTM1911"
                },
                {
                    "name": "P38",
                    "displayNameSID": "ID_MICA_ABILITY_P38"
                }
            ],
            "returnType": "Enum_SecondaryWeapons"
        },
        {
            "name": "SecondaryWeaponsKingston",
            "displayNameSID": "ID_MICA_MENU_KINGSTON",
            "listType": "SecondaryWeapons",
            "selectionValues": [
                {
                    "name": "Glock17",
                    "displayNameSID": "ID_ABILITY_GLOCK17"
                },
                {
                    "name": "MP17",
                    "displayNameSID": "ID_ABILITY_MP17"
                },
                {
                    "name": "Taurus",
                    "displayNameSID": "ID_ABILITY_TAURUS"
                }
            ],
            "returnType": "Enum_SecondaryWeapons"
        },
        {
            "name": "SecondaryWeaponsRumney",
            "displayNameSID": "ID_MICA_MENU_BC2",
            "listType": "SecondaryWeapons",
            "selectionValues": [
                {
                    "name": "M1911_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_COLTM1911"
                },
                {
                    "name": "M93R_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_M93R"
                },
                {
                    "name": "MP412REX_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_MP412REX"
                },
                {
                    "name": "MP443_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_MP443"
                },
                {
                    "name": "TracerDart",
                    "displayNameSID": "ID_MICA_ABILITY_TRACER_DART_GUN"
                }
            ],
            "returnType": "Enum_SecondaryWeapons"
        },
        {
            "name": "SoldierStateBool",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SOLDIERSTATEBOOLITEM",
            "listType": "SoldierStateBool",
            "selectionValues": [
                {
                    "name": "IsAISoldier",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISAISOLDIER"
                },
                {
                    "name": "IsAlive",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISALIVE"
                },
                {
                    "name": "IsBeingRevived",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISBEINGREVIVED"
                },
                {
                    "name": "IsCrouching",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISCROUCHING"
                },
                {
                    "name": "IsDead",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISDEAD"
                },
                {
                    "name": "IsFiring",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISFIRING"
                },
                {
                    "name": "IsInAir",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISINAIR"
                },
                {
                    "name": "IsInteracting",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISINTERACTING"
                },
                {
                    "name": "IsInVehicle",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISINVEHICLE"
                },
                {
                    "name": "IsInWater",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISINWATER"
                },
                {
                    "name": "IsJumping",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISJUMPING"
                },
                {
                    "name": "IsManDown",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISMANDOWN"
                },
                {
                    "name": "IsOnGround",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISONGROUND"
                },
                {
                    "name": "IsParachuting",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISPARACHUTING"
                },
                {
                    "name": "IsProne",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISPRONE"
                },
                {
                    "name": "IsReloading",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISRELOADING"
                },
                {
                    "name": "IsReviving",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISREVIVING"
                },
                {
                    "name": "IsSprinting",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISSPRINTING"
                },
                {
                    "name": "IsStanding",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISSTANDING"
                },
                {
                    "name": "IsVaulting",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISVAULTING"
                },
                {
                    "name": "IsZooming",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEBOOL_ISZOOMING"
                }
            ],
            "returnType": "Enum_SoldierStateBool"
        },
        {
            "name": "SoldierStateNumber",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SOLDIERSTATENUMBERITEM",
            "listType": "SoldierStateNumber",
            "selectionValues": [
                {
                    "name": "CurrentHealth",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATENUMBER_CURRENTHEALTH"
                },
                {
                    "name": "CurrentWeaponAmmo",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATENUMBER_CURRENTWEAPONAMMO"
                },
                {
                    "name": "CurrentWeaponMagazineAmmo",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATENUMBER_CURRENTWEAPONMAGAZINEAMMO"
                },
                {
                    "name": "MaxHealth",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATENUMBER_MAXHEALTH"
                },
                {
                    "name": "NormalizedHealth",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATENUMBER_NORMALIZEDHEALTH"
                },
                {
                    "name": "Speed",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATENUMBER_SPEED"
                }
            ],
            "returnType": "Enum_SoldierStateNumber"
        },
        {
            "name": "SoldierStateVector",
            "displayNameSID": "ID_ARRIVAL_BLOCK_SOLDIERSTATEVECTORITEM",
            "listType": "SoldierStateVector",
            "selectionValues": [
                {
                    "name": "GetLinearVelocity",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEVECTOR_GETLINEARVELOCITY"
                },
                {
                    "name": "GetPosition",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_SOLDIERSTATEVECTOR_GETPOSITION"
                }
            ],
            "returnType": "Enum_SoldierStateVector"
        },
        {
            "name": "ThrowablesAlexandria",
            "displayNameSID": "ID_MICA_MENU_BF3",
            "listType": "Throwables",
            "selectionValues": [
                {
                    "name": "M67",
                    "displayNameSID": "ID_MICA_ABILITY_M67GRENADE"
                }
            ],
            "returnType": "Enum_Throwables"
        },
        {
            "name": "ThrowablesGrafton",
            "displayNameSID": "ID_MICA_MENU_1942",
            "listType": "Throwables",
            "selectionValues": [
                {
                    "name": "Dynamite",
                    "displayNameSID": "ID_MICA_ABILITY_DYNAMITE"
                },
                {
                    "name": "FragGrenadeMkII",
                    "displayNameSID": "ID_ABILITY_MKIIGRENADE"
                },
                {
                    "name": "StickGrenade",
                    "displayNameSID": "ID_ARRIVAL_MODBUILDER_SELECTIONLISTS_THROWABLESGRAFTON_STICKGRENADE"
                }
            ],
            "returnType": "Enum_Throwables"
        },
        {
            "name": "ThrowablesKingston",
            "displayNameSID": "ID_MICA_MENU_KINGSTON",
            "listType": "Throwables",
            "selectionValues": [
                {
                    "name": "EMPGrenade",
                    "displayNameSID": "ID_ABILITY_EMPGRENADE"
                },
                {
                    "name": "FragGrenade",
                    "displayNameSID": "ID_ABILITY_GRENADE"
                },
                {
                    "name": "IncendiaryGrenade",
                    "displayNameSID": "ID_ABILITY_INCENDIARYGRENADE"
                },
                {
                    "name": "MotionMine",
                    "displayNameSID": "ID_ABILITY_MOTIONMINE"
                },
                {
                    "name": "SmokeGrenade",
                    "displayNameSID": "ID_ABILITY_SMOKEGRENADE"
                }
            ],
            "returnType": "Enum_Throwables"
        },
        {
            "name": "ThrowablesRumney",
            "displayNameSID": "ID_MICA_MENU_BC2",
            "listType": "Throwables",
            "selectionValues": [
                {
                    "name": "FragGrenade_RUM",
                    "displayNameSID": "ID_MICA_ABILITY_BC2GRENADE"
                }
            ],
            "returnType": "Enum_Throwables"
        }
    ],
    "controlActions": [
        {
            "name": "Break",
            "displayNameSID": "ID_ARRIVAL_BLOCK_BREAK",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 12,
            "functionSignatures": []
        },
        {
            "name": "Continue",
            "displayNameSID": "ID_ARRIVAL_BLOCK_CONTINUE",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 13,
            "functionSignatures": []
        },
        {
            "name": "ForVariable",
            "displayNameSID": "ID_ARRIVAL_BLOCK_FORVARIABLE",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 19,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Variable"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        },
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Number"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "If",
            "displayNameSID": "ID_ARRIVAL_BLOCK_IF",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 16,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "While",
            "displayNameSID": "ID_ARRIVAL_BLOCK_WHILE",
            "category": "Logic",
            "deprecated": false,
            "dataIndex": 17,
            "functionSignatures": [
                {
                    "parameterTypes": [
                        {
                            "anyType": false,
                            "parameterTypes": [
                                "Boolean"
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "types": [
        "String",
        "Number",
        "Boolean",
        "Global",
        "Player",
        "TeamId",
        "Vector",
        "Array",
        "Enum_CharacterGadgets",
        "Enum_CustomMessages",
        "Enum_Factions",
        "Enum_InventorySlots",
        "Enum_SoldierStateNumber",
        "Enum_SoldierStateBool",
        "Enum_SoldierStateVector",
        "Enum_PrimaryWeapons",
        "Enum_SecondaryWeapons",
        "Enum_OpenGadgets",
        "Enum_Throwables",
        "Enum_MeleeWeapons",
        "Enum_SoldierKits",
        "Enum_MedGadgetTypes",
        "Message",
        "Enum_RestrictedInputs",
        "Enum_ResupplyTypes"
    ],
    "constraints": {
        "maxGlobalVariables": 16,
        "maxObjectVariables": 16,
        "maxDepth": 64
    }
  }