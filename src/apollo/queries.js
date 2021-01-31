import { gql } from 'apollo-boost'

export const GET_EPOCHES = gql`
  query {
    epoches {
      ...EpochFragment
    }
  }

  fragment EpochFragment on Epoch {
    id
    startBlock
    endBlock
    signalledTokens
    stakeDeposited
    queryFeeRebates
    totalRewards
    totalIndexerRewards
    totalDelegatorRewards
  }
`
