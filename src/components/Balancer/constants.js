import React from 'react'

const DATA = [
  {
    title: (
      <>
        Run{' '}
        <span>
          &lt;docker run <b>-d</b> <b>-p</b> 80:80 <b>--name</b>{' '}
          <b>solana-lb_c</b> extrnode/solana-lb&gt;
        </span>
        <br /> command on Docker
      </>
    ),
    icon: 'blank',
  },
  {
    title: 'Connect your decentralized application (dApp) to a balancer',
    icon: 'gear',
  },
  {
    title:
      'Automatically reroute your requests if any public RPC node in a cluster is down',
    icon: 'routes',
  },
]

export default DATA
