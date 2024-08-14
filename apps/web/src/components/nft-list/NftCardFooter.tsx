import dayjs from 'dayjs'
import type { PropsWithChildren } from 'react'
import { Address } from '@ant-design/web3'

import type { NftItem } from '../../types'
import './style.css'

type NftCardFooterProps = PropsWithChildren<{ dataSource: NftItem }>

function NftCardFooter(props: NftCardFooterProps) {
  const { dataSource } = props

  return (
    <div className="NftCardFooter">
      <div>
        <span>Contract Address</span>
        <Address address={dataSource.nftContract} ellipsis={{ headClip: 8, tailClip: 6 }} copyable />
      </div>
      <div>
        <span>Seller Address</span>
        <Address address={dataSource.seller} ellipsis={{ headClip: 8, tailClip: 6 }} copyable />
      </div>
      <div>
        <span>Listing Time</span>
        <span>{dayjs(Number(dataSource.listedAt) * 1000).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    </div>
  )
}

export default NftCardFooter
