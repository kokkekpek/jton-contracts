const RootTokenContractContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "root_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "root_owner_address_",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getVersion",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getDetails",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "name",
                                "type": "bytes"
                            },
                            {
                                "name": "symbol",
                                "type": "bytes"
                            },
                            {
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "name": "root_public_key",
                                "type": "uint256"
                            },
                            {
                                "name": "root_owner_address",
                                "type": "address"
                            },
                            {
                                "name": "total_supply",
                                "type": "uint128"
                            }
                        ],
                        "name": "value0",
                        "type": "tuple"
                    }
                ]
            },
            {
                "name": "getTotalSupply",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getWalletCode",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "getWalletAddress",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "sendExpectedWalletAddress",
                "inputs": [
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployWallet",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "deploy_grams",
                        "type": "uint128"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "gas_back_address",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "deployEmptyWallet",
                "inputs": [
                    {
                        "name": "deploy_grams",
                        "type": "uint128"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "gas_back_address",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "mint",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "proxyBurn",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "sender_address",
                        "type": "address"
                    },
                    {
                        "name": "send_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "callback_address",
                        "type": "address"
                    },
                    {
                        "name": "callback_payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "tokensBurned",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "sender_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "sender_address",
                        "type": "address"
                    },
                    {
                        "name": "send_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "callback_address",
                        "type": "address"
                    },
                    {
                        "name": "callback_payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendSurplusGas",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setPaused",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendPausedCallbackTo",
                "inputs": [
                    {
                        "name": "callback_id",
                        "type": "uint64"
                    },
                    {
                        "name": "callback_addr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "transferOwner",
                "inputs": [
                    {
                        "name": "root_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "root_owner_address_",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "name",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "symbol",
                "inputs": [],
                "outputs": [
                    {
                        "name": "symbol",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "decimals",
                "inputs": [],
                "outputs": [
                    {
                        "name": "decimals",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "start_gas_balance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "start_gas_balance",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "paused",
                "inputs": [],
                "outputs": [
                    {
                        "name": "paused",
                        "type": "bool"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_randomNonce",
                "type": "uint256"
            },
            {
                "key": 2,
                "name": "name",
                "type": "bytes"
            },
            {
                "key": 3,
                "name": "symbol",
                "type": "bytes"
            },
            {
                "key": 4,
                "name": "decimals",
                "type": "uint8"
            },
            {
                "key": 5,
                "name": "wallet_code",
                "type": "cell"
            }
        ],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "3bae4a28a3491aa348ad9b4f21ca642828fcecb0a4945246c5ba7ad4f7f87d04",
};
export default RootTokenContractContract;