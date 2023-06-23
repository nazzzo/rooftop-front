import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TokenData } from "@utils/types/collection.interface"
import { Icon } from '@iconify/react';
import { useIpfs } from '@utils/hooks/useIpfs';

export const NFTCard = ({ token }: { token: TokenData }) => {
  const router = useRouter();
  const { _id } = router.query;
  const { metaData, imageUrl , isLoading } = useIpfs(token)

    if (isLoading) return <div>Loading...</div> // 로딩 컴포넌트 필요
    return (
        <div className="w-64 mb-10 mx-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 relative">
            <div className="px-3 py-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">#{token.tokenId}</p>
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white pl-4 py-1">
                    {metaData?.name}
                </h1>
            </div>
            {token.openingPrice !== 0 && (
                <div className="absolute top-2 right-2 text-white bg-purple-600 px-2 py-1 rounded-lg text-xs font-semibold">
                    {token.auctionEndTime}시간 후 경매종료
                </div>
            )}
            <Link href={`/collections/${_id}/nft?id=${token.id}`}>
                <Image
                    src={imageUrl ? imageUrl : 'https://dummyimage.com/480x480/ccc/000'}
                    alt="nft image"
                    width={480}
                    height={480}
                    className="object-cover w-full h-48"
                />
            </Link>
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white flex items-center">
                    <Icon icon="cryptocurrency-color:matic" className="mr-1" />
                    {token.price / 10 ** 18}
                </h1>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-150 transform bg-red-500 rounded hover:bg-gray-600 focus:bg-gray-700 focus:outline-none">
                    Add to cart
                </button>
            </div>
        </div>
    )
}
