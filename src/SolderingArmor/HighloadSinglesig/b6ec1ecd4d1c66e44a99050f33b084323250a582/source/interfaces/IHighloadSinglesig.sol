pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

//================================================================================
//
struct Message 
{
    uint256 hash;
    uint64  expireAt;
}

//================================================================================
/// @title Highload Single Signature Wallet
/// @author SuperArmor (https://t.me/SuperArmor)
//
interface IHighloadSinglesig
{
    function sendTransaction(address dest, uint128 value, bool bounce, uint16 flags, TvmCell payload) external;
    function getMessages() external view returns (Message[] messages);
}

//================================================================================
//
