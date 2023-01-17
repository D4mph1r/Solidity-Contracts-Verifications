// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("MyToken", "MTK") {}

    function _baseURI() internal pure override returns (string memory) {
        return "http://metadata.quirkies.io/{id}";
    }
    // http://metadata.quirkies.io/{id}
    // https://hg-prod-nv-erinyes.s3.amazonaws.com/public/valentine-nft-drop/metadata/{id}
    // https://api.gmcafe.io/metadata/gmoo/{id}
    
    // https://murderheaddeathclub.com/api/nft/{id}
    // https://cdn.juuni.xyz/assets/zodias/{id}


    // https://nft.bueno.art/api/contract/3kvyx8zTLQBH_Eq3AsW2z/chain/1/metadata/{id}
    // https://data.nounsjp.wtf/2022-end-year/metadata/{id}
    
    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        safeTransferFrom(from, to, tokenId, "");
    }
}