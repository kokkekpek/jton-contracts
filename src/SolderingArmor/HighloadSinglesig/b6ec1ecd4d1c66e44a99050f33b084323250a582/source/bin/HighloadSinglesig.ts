const HighloadSinglesigContract = {
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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "flags",
                        "type": "uint16"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getMessages",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "hash",
                                "type": "uint256"
                            },
                            {
                                "name": "expireAt",
                                "type": "uint64"
                            }
                        ],
                        "name": "messages",
                        "type": "tuple[]"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgECFAEAAwAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsRBQQTAuAh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64lMw0z/THzQg+CO88rki+QAg+EqBAQD0DiCRMd7y0Mr4ACD4SiPIyz9ZgQEA9EP4avhLpLUf+GskbFHTHwHbPPhHbvJ8DwYBOiLQ1wsDqTgA3CHHANwh1w0f8rwh3QHbPPhHbvJ8BgM8IIIQaLVfP7rjAiCCEHdEx+K64wIgghB/EfvXuuMCDQkHArQw+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39cND5XU0dDTD9/U0fhFIG6SMHDe+EK68uBk+ABUc0LIz4WAygBzz0DOAfoCcc8LaiHPFMki+wAQCAHujm34S8Ey3HD4SiCBAQD0hpUgWNcLP5NtbW3icJogwQIglDAjbrPejkCOJCWkNiH4I7mOEiL4SoEBAPRbMPhq+EultR/4a94lwjKTXwZ04NggwgHcUzSBAQD0fJUgWNcLP5NtbW3iNDQ06MAE3F8F2F8F2zx/+GcOA4Qw+EJu4wDR2zwhji4j0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPdEx+KM8WAW8iAssf9ADJcPsAkTDi4wB/+GcQCg4BQHBtbwL4SiCBAQD0hpUgWNcLP5NtbW3ikyJus46A6F8ECwFSJF8ibwLbPAFvIiGkVSCAIPRDbwI1UyOBAQD0fJUgWNcLP5NtbW3ibDMMABBvIgHIy//LPwI0MPhCbuMA+Ebyc3/4ZtH4QvLgyfgA2zx/+GcPDgAo+Ev4SvhG+ELIy//KAPQAyx/J7VQBUO1E0NdJwgGKjh1w7UTQ9AVt+Gpw+GuAQPQO8r3XC//4YnD4Y3D4ZuIQACjtRNDT/9IA9ATTH9H4a/hq+Gb4YgIK9KQg9KETEgAUc29sIDAuNDcuMAAA",
    code: "te6ccgECEQEAAtMABCSK7VMg4wMgwP/jAiDA/uMC8gsOAgEQAuAh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64lMw0z/THzQg+CO88rki+QAg+EqBAQD0DiCRMd7y0Mr4ACD4SiPIyz9ZgQEA9EP4avhLpLUf+GskbFHTHwHbPPhHbvJ8DAMBOiLQ1wsDqTgA3CHHANwh1w0f8rwh3QHbPPhHbvJ8AwM8IIIQaLVfP7rjAiCCEHdEx+K64wIgghB/EfvXuuMCCgYEArQw+EJu4wD6QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39cND5XU0dDTD9/U0fhFIG6SMHDe+EK68uBk+ABUc0LIz4WAygBzz0DOAfoCcc8LaiHPFMki+wANBQHujm34S8Ey3HD4SiCBAQD0hpUgWNcLP5NtbW3icJogwQIglDAjbrPejkCOJCWkNiH4I7mOEiL4SoEBAPRbMPhq+EultR/4a94lwjKTXwZ04NggwgHcUzSBAQD0fJUgWNcLP5NtbW3iNDQ06MAE3F8F2F8F2zx/+GcLA4Qw+EJu4wDR2zwhji4j0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPdEx+KM8WAW8iAssf9ADJcPsAkTDi4wB/+GcNBwsBQHBtbwL4SiCBAQD0hpUgWNcLP5NtbW3ikyJus46A6F8ECAFSJF8ibwLbPAFvIiGkVSCAIPRDbwI1UyOBAQD0fJUgWNcLP5NtbW3ibDMJABBvIgHIy//LPwI0MPhCbuMA+Ebyc3/4ZtH4QvLgyfgA2zx/+GcMCwAo+Ev4SvhG+ELIy//KAPQAyx/J7VQBUO1E0NdJwgGKjh1w7UTQ9AVt+Gpw+GuAQPQO8r3XC//4YnD4Y3D4ZuINACjtRNDT/9IA9ATTH9H4a/hq+Gb4YgIK9KQg9KEQDwAUc29sIDAuNDcuMAAA",
    codeHash: "76061c5218e63d778d00b4cf9e0882cdfebe0dd359d355276d8b85ca08c56a85",
};
export default HighloadSinglesigContract;