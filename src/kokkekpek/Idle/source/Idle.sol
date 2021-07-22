pragma ton-solidity >= 0.47.0;

/**
 * Contract for testing setCode and onCodeUpgrade functionality.
 */
contract Idle {
    /********
     * PURE *
     ********/
    function isIdle() public pure returns(bool idle) {
        return true;
    }



    /**************************
     * PURE * ON CODE UPGRADE *
     **************************/
    function onCodeUpgrade() private pure {}
}