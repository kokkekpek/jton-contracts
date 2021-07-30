pragma ton-solidity >= 0.47.0;

interface IIdle {
    function isIdle() external pure responsible returns (bool);
}