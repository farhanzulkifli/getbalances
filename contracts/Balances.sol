//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Balances {
    struct TokenBalances {
        address token;
        uint256 balance;
    }

    function getBalances(address address_, address[] calldata tokens)
        public
        view
        returns (TokenBalances[] memory)
    {
        TokenBalances[] memory tokenBalances = new TokenBalances[](
            tokens.length
        );
        for (uint256 i = 0; i < tokens.length; i++) {
            tokenBalances[i] = TokenBalances(
                tokens[i],
                IERC20(tokens[i]).balanceOf(address_)
            );
        }
        return tokenBalances;
    }
}
