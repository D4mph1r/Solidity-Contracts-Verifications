// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 
interface SetRoyalityInterface {
    struct SetRoyalty {
		address receiver;
		uint96 feeNumerator; // 10000 == 100%
	}
}
