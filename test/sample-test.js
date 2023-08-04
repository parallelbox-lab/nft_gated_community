const { expect } = require("chai");

describe("NftMarketplace", function () {
    it("should create and execute market sales", async function() {
     const Market = await ethers.getContractFactory("NftMarketplace")
     const market = await Market.deployed()
     const marketAddress = market.address

     const NFT = await getContractFactory("NftMarketplace")
     const nft = NFT.deploy(marketAddress)
     await nft.deployed()
     const nftContactAddress = nft.address
     
     let listingPrice = await market.getListingPrice()
     listingPrice = listingPrice.toString()

     const auctionPrice = ethers.utils.parseUnits('1','ether')
     await nft.createToken("https://www.tokenlocation.com")
     await nft.createToken("https://www.tokenlocation.com")

     await market.createMarketItem(nftContactAddress, 1, auctionPrice, {value: listingPrice})
     await market.createMarketItem(nftContactAddress, 2, auctionPrice, {value: listingPrice})

     const [_, buyerAddress] = await ethers.getSigners()
     await market.connect(buyerAddress).createMarketSale(nftContactAddress, 1, {value: auctionPrice})
     const iteem = await market.fetchMarketItems()
     console.log('items',items)



    });
});