import tw from 'tailwind-styled-components'
import { useState } from "react"
import { TokenData, ActivityData } from "@utils/types/nft.interface"
import { UserAddress } from '@common/copy/address'
import { TimeStamp } from "@common/timestamp/timestamp"

export const NFTActivity = ({ token, activity }: { token: TokenData, activity: ActivityData[] }) => {

    const ThStyled = tw.th`
        px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400
    `
    const TdStyled = tw.td`
        px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 dark:bg-gray-600
    `
    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg shadow overflow-hidden dark:border-gray-800 dark:shadow-gray-700 max-h-[500px] overflow-y-scroll">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <ThStyled>Event</ThStyled>
                                    <ThStyled>From</ThStyled>
                                    <ThStyled>To</ThStyled>
                                    <ThStyled>Price</ThStyled>
                                    <ThStyled>Date</ThStyled>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                {activity.slice().reverse().map((item, index) => (
                                    <tr key={index}>
                                        <TdStyled>{item.event}</TdStyled>
                                        <TdStyled>
                                            <UserAddress address={item.from} />
                                        </TdStyled>
                                        <TdStyled>
                                            <UserAddress address={item.to} />
                                        </TdStyled>
                                        <TdStyled className="font-bold">{item.price / (10 ** 18)} MATIC</TdStyled>
                                        <TdStyled><TimeStamp timestamp={item.createdAt} /></TdStyled>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}