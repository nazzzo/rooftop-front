export interface CollectionData {
    _id: string;
    address: string;
    creator: string;
    name: string;
    symbol: string;
    description: string;
    url: string;
    creatorFee: string;
    logo: string;
    verified: boolean;
    floorPrice: number;
    totalVolume: number;
    totalSales: number;
    favorite:string[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}


export interface TokenData {
    id: number;
    seller: string;
    NFTaddress: string;
    tokenId: number;
    price: number;
    metadata: string;
    sold: boolean;
    creatorFee: number;
    openingPrice: number;
    auctionEndTime: number;
    highestBidder: string;
    highestBid: number;
}

export interface SummaryData {
    currentTradeVolume: number;
    previousTradeVolume: number;
    percentage:number;
}

export interface ActivityData {
    _id: string;
    id: number;
    from: string;
    to: string;
    NFTaddress: string;
    tokenId: number;
    price: number;
    event: string;
    krwPrice:string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface MetaData {
    name: string;
    desription: string;
    ipfs: string;
    imageUrl? : string;
}


export type NftMeta = {
    name: string
    description: string
    image: string
}

export type PinataRes = {
    IpfsHash: string
    PinSize: number
    Timestamp: string
    isDuplicate: boolean
}

export interface AirdropData {
    _id: string;
    NFTaddress: string;
    targets: string[];
    marketIds: number[];
    tokenIds: number[];
    mintDate: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface LeaderBoardData {
    address: string;
    transfer: number;
    minted: number;
    totalPoint: number;
}