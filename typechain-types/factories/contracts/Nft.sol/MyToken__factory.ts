/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MyToken,
  MyTokenInterface,
} from "../../../contracts/Nft.sol/MyToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b81525081600090816200005f91906200018c565b5060016200006e82826200018c565b5050506200008b620000856200009160201b60201c565b62000095565b62000258565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200011257607f821691505b6020821081036200013357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018757600081815260208120601f850160051c81016020861015620001625750805b601f850160051c820191505b8181101562000183578281556001016200016e565b5050505b505050565b81516001600160401b03811115620001a857620001a8620000e7565b620001c081620001b98454620000fd565b8462000139565b602080601f831160018114620001f85760008415620001df5750858301515b600019600386901b1c1916600185901b17855562000183565b600085815260208120601f198616915b82811015620002295788860151825594840194600190910190840162000208565b5085821015620002485787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61157280620002686000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb4651461021b578063b88d4fde1461022e578063c87b56dd14610241578063e985e9c514610254578063f2fde38b1461026757600080fd5b806370a08231146101d9578063715018a6146101fa5780638da5cb5b1461020257806395d89b411461021357600080fd5b806323b872dd116100de57806323b872dd1461018d57806340d097c3146101a057806342842e0e146101b35780636352211e146101c657600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e3660046110c2565b61027a565b60405190151581526020015b60405180910390f35b6101406102cc565b60405161012f919061112f565b61016061015b366004611142565b61035e565b6040516001600160a01b03909116815260200161012f565b61018b610186366004611177565b610385565b005b61018b61019b3660046111a1565b61049a565b61018b6101ae3660046111dd565b6104cb565b61018b6101c13660046111a1565b505050565b6101606101d4366004611142565b6104fc565b6101ec6101e73660046111dd565b61055c565b60405190815260200161012f565b61018b6105e2565b6006546001600160a01b0316610160565b6101406105f6565b61018b6102293660046111f8565b610605565b61018b61023c36600461124a565b610610565b61014061024f366004611142565b610648565b610123610262366004611326565b6106e1565b61018b6102753660046111dd565b61070f565b60006001600160e01b031982166380ac58cd60e01b14806102ab57506001600160e01b03198216635b5e139f60e01b145b806102c657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102db90611359565b80601f016020809104026020016040519081016040528092919081815260200182805461030790611359565b80156103545780601f1061032957610100808354040283529160200191610354565b820191906000526020600020905b81548152906001019060200180831161033757829003601f168201915b5050505050905090565b600061036982610788565b506000908152600460205260409020546001600160a01b031690565b6000610390826104fc565b9050806001600160a01b0316836001600160a01b0316036104025760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061041e575061041e81336106e1565b6104905760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016103f9565b6101c183836107e7565b6104a43382610855565b6104c05760405162461bcd60e51b81526004016103f990611393565b6101c18383836108b4565b6104d3610a25565b60006104de60075490565b90506104ee600780546001019055565b6104f88282610a7f565b5050565b6000818152600260205260408120546001600160a01b0316806102c65760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103f9565b60006001600160a01b0382166105c65760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103f9565b506001600160a01b031660009081526003602052604090205490565b6105ea610a25565b6105f46000610a99565b565b6060600180546102db90611359565b6104f8338383610aeb565b61061a3383610855565b6106365760405162461bcd60e51b81526004016103f990611393565b61064284848484610bb9565b50505050565b606061065382610788565b600061068f6040805180820190915260208082527f687474703a2f2f6d657461646174612e717569726b6965732e696f2f7b69647d9082015290565b905060008151116106af57604051806020016040528060008152506106da565b806106b984610bec565b6040516020016106ca9291906113e0565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610717610a25565b6001600160a01b03811661077c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103f9565b61078581610a99565b50565b6000818152600260205260409020546001600160a01b03166107855760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103f9565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061081c826104fc565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610861836104fc565b9050806001600160a01b0316846001600160a01b03161480610888575061088881856106e1565b806108ac5750836001600160a01b03166108a18461035e565b6001600160a01b0316145b949350505050565b826001600160a01b03166108c7826104fc565b6001600160a01b0316146108ed5760405162461bcd60e51b81526004016103f99061140f565b6001600160a01b03821661094f5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103f9565b61095c8383836001610c7f565b826001600160a01b031661096f826104fc565b6001600160a01b0316146109955760405162461bcd60e51b81526004016103f99061140f565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6006546001600160a01b031633146105f45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103f9565b6104f8828260405180602001604052806000815250610d07565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610b4c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103f9565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610bc48484846108b4565b610bd084848484610d3a565b6106425760405162461bcd60e51b81526004016103f990611454565b60606000610bf983610e3b565b600101905060008167ffffffffffffffff811115610c1957610c19611234565b6040519080825280601f01601f191660200182016040528015610c43576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610c4d57509392505050565b6001811115610642576001600160a01b03841615610cc5576001600160a01b03841660009081526003602052604081208054839290610cbf9084906114bc565b90915550505b6001600160a01b03831615610642576001600160a01b03831660009081526003602052604081208054839290610cfc9084906114cf565b909155505050505050565b610d118383610f13565b610d1e6000848484610d3a565b6101c15760405162461bcd60e51b81526004016103f990611454565b60006001600160a01b0384163b15610e3057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610d7e9033908990889088906004016114e2565b6020604051808303816000875af1925050508015610db9575060408051601f3d908101601f19168201909252610db69181019061151f565b60015b610e16573d808015610de7576040519150601f19603f3d011682016040523d82523d6000602084013e610dec565b606091505b508051600003610e0e5760405162461bcd60e51b81526004016103f990611454565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506108ac565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610e7a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610ea6576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610ec457662386f26fc10000830492506010015b6305f5e1008310610edc576305f5e100830492506008015b6127108310610ef057612710830492506004015b60648310610f02576064830492506002015b600a83106102c65760010192915050565b6001600160a01b038216610f695760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103f9565b6000818152600260205260409020546001600160a01b031615610fce5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103f9565b610fdc600083836001610c7f565b6000818152600260205260409020546001600160a01b0316156110415760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103f9565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b03198116811461078557600080fd5b6000602082840312156110d457600080fd5b81356106da816110ac565b60005b838110156110fa5781810151838201526020016110e2565b50506000910152565b6000815180845261111b8160208601602086016110df565b601f01601f19169290920160200192915050565b6020815260006106da6020830184611103565b60006020828403121561115457600080fd5b5035919050565b80356001600160a01b038116811461117257600080fd5b919050565b6000806040838503121561118a57600080fd5b6111938361115b565b946020939093013593505050565b6000806000606084860312156111b657600080fd5b6111bf8461115b565b92506111cd6020850161115b565b9150604084013590509250925092565b6000602082840312156111ef57600080fd5b6106da8261115b565b6000806040838503121561120b57600080fd5b6112148361115b565b91506020830135801515811461122957600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561126057600080fd5b6112698561115b565b93506112776020860161115b565b925060408501359150606085013567ffffffffffffffff8082111561129b57600080fd5b818701915087601f8301126112af57600080fd5b8135818111156112c1576112c1611234565b604051601f8201601f19908116603f011681019083821181831017156112e9576112e9611234565b816040528281528a602084870101111561130257600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561133957600080fd5b6113428361115b565b91506113506020840161115b565b90509250929050565b600181811c9082168061136d57607f821691505b60208210810361138d57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b600083516113f28184602088016110df565b8351908301906114068183602088016110df565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b818103818111156102c6576102c66114a6565b808201808211156102c6576102c66114a6565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061151590830184611103565b9695505050505050565b60006020828403121561153157600080fd5b81516106da816110ac56fea26469706673582212203ab6204ec472a2bae9d221fcbca9c8954a0d321bf94dd23f5f280aca1aa7bbfa64736f6c63430008110033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyToken> {
    return super.deploy(overrides || {}) as Promise<MyToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyToken {
    return super.attach(address) as MyToken;
  }
  override connect(signer: Signer): MyToken__factory {
    return super.connect(signer) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new utils.Interface(_abi) as MyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken {
    return new Contract(address, _abi, signerOrProvider) as MyToken;
  }
}