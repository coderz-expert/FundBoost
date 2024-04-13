// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;

contract Campaignfactory{
    address[] public demployedCampaigns;
event campaignCreated(string title, uint requiredAmount, address indexed owner, address campiagnAddress,string imageUrl, uint indexed timestamp, string indexed category); 
    function   createCampaign(string memory campaignTitle,
     uint requiredCampaignAmount, 
     string memory imageCampaignUri, 
     string memory category,
     string memory campaignStory) public
    {
        Campaign newCampaign=new Campaign(campaignTitle,requiredCampaignAmount,imageCampaignUri,campaignStory,msg.sender);
        demployedCampaigns.push(address(newCampaign));
        emit campaignCreated(campaignTitle,requiredCampaignAmount,msg.sender,address(newCampaign),imageCampaignUri,block.timestamp,category);
    }
}


contract Campaign{
    string public title;
    uint public requiredAmount;
    string public image; 
    string public story;
    address payable public owner;
    uint public receivedAmount;

    event donated (address indexed doner, uint indexed amount, uint indexed timestamp);

    constructor(string memory campaignTitle, uint requiredCampaignAmount, string memory imageCampaignUri, string memory campaignStory,address campaignOwner)
    {
        title=campaignTitle;
        requiredAmount=requiredCampaignAmount;
        image=imageCampaignUri;
        story=campaignStory;
        owner=payable(campaignOwner);

    }

    function donate() public payable{
        require(requiredAmount>receivedAmount,"require Amount fullfill");
            owner.transfer(msg.value);
            receivedAmount+=msg.value;
            emit donated(msg.sender,msg.value,block.timestamp);
    }

}