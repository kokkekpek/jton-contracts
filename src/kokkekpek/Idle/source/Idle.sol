pragma ton-solidity >= 0.47.0;

import "./interfaces/IIdle.sol";

/**
 * Contract for testing setCode and onCodeUpgrade functionality.
 */
contract Idle is IIdle {
    /********
     * PURE *
     ********/
    function isIdle() override external pure responsible returns (bool) {
        return true;
    }



    /**************************
     * PURE * ON CODE UPGRADE *
     **************************/
    function onCodeUpgrade() private pure {}
}