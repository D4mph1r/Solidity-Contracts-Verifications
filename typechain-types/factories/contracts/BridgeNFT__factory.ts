/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BridgeNFT, BridgeNFTInterface } from "../../contracts/BridgeNFT";

const _abi = [
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "burnFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "mintArgs",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class BridgeNFT__factory {
  static readonly abi = _abi;
  static createInterface(): BridgeNFTInterface {
    return new utils.Interface(_abi) as BridgeNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeNFT {
    return new Contract(address, _abi, signerOrProvider) as BridgeNFT;
  }
}
