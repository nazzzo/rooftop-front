import Image from 'next/image'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { Icon } from '@iconify/react'
import { VerifiedMarker } from '@components/common/marker/verify'

export const SectionWrap = tw.div`
    flex flex-row w-full p-6 mb-6 rounded-lg bg-white dark:border-gray-700 dark:bg-gray-800 shadow
`

export const SectionA = tw.div`
    flex flex-col px-6 w-4/5
`

export const SectionB = tw.div`
    flex w-1/5 flex-row-reverse items-center relative
`

interface LogoProps {
    src: string
    link: string
    collectionAddress: string
    verified: boolean
}

export const Logo = ({ src, link, collectionAddress, verified }: LogoProps) => {
    return (
        <div className="min-w-40 cursor-pointer relative">
            {/* <Link href={{ pathname: `${link}`, query: { ca: `${collectionAddress}` }}} as={link}> */}
            <Link href={`collections/${collectionAddress}`}>
                <Image
                    src={src}
                    alt=""
                    width={200}
                    height={200}
                    className="w-40 h-40 rounded-md object-cover"
                />
            </Link>
            {verified && <div className="absolute top-[-5%] left-[-5%] w-[24px] h-[24px] rounded-full bg-white dark:bg-gray-800 flex items-center justify-center"><VerifiedMarker /></div>}
        </div>
    )
}

export const CollectionName = ({ name }: { name: string }) => {
    return (
        <div className="flex h-8 flex-row items-center">
            <div className="text-3xl font-semibold mr-1.5 whitespace-nowrap w-[160px] lg:w-[400px] text-ellipsis overflow-hidden">{name}</div>
        </div>
    )
}

export const Description = ({ description }: { description: string }) => {
    return <div className="py-1.5 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap w-[160px] lg:w-[400px] text-ellipsis overflow-hidden">{description}</div>
}

interface CollectionProps {
    totalVolume: number
    floorPrice: number
    creatorFee: string
    follows: string[]
}

export const CollectionDatas = ({
    totalVolume,
    floorPrice,
    creatorFee,
    follows,
}: CollectionProps) => {
    return (
        <div className="mt-2 flex flex-row items-center space-x-6 invisible w-0 lg:visible lg:w-full">
            <>
                <CollectionData
                    data={totalVolume}
                    icon="ri:exchange-box-fill"
                    text="총 거래량"
                />
                <CollectionData data={floorPrice} icon="game-icons:token" text="최저 거래가" />
                <CollectionData
                    data={creatorFee}
                    icon="heroicons-solid:receipt-tax"
                    text="작가 로열티"
                />
                <CollectionData data={follows.length} icon="mdi:heart" text="팔로워" />
            </>
        </div>
    )
}

const CollectionData = ({
    data,
    text,
    icon,
}: {
    data: number | string
    text: string
    icon: string
}) => {
    return (
        <div className="flex h-20 w-36 flex-col items-center justify-center rounded-md border border-dashed border-gray-300 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
            <div className="flex flex-row items-center justify-center">
                <Icon icon={icon} className="mr-2 text-gray-500/95 dark:text-gray-400 text-lg" />
                <span className="font-bold text-gray-700 dark:text-gray-300">{data}</span>
            </div>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">{text}</div>
        </div>
    )
}
