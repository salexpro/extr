import React from 'react'

const DATA = [
  {
    question: 'What is the extrnode?',
    answer: (
      <>
        <p>
          extrnode is a battle-tested decentralized RPC gateway powered by
          Everstake, a responsible validator trusted by 625k users across 70+
          blockchain networks.
        </p>
        <p>
          We are building a public load balancer to allow developers to connect
          their dApps to a cluster of public RPC nodes and automatically reroute
          responses if any node is down. While our public load balancer is still
          underway, we offer an open-source balancer on Docker.
        </p>
      </>
    ),
  },
  {
    question:
      "Can I use extrnode's open-source load balancer for production applications?",
    answer:
      'While Solana public RPC nodes are available freely and to anyone, there is no guarantee that they will operate as you expect. Everstake and extrnode do not control those nodes in any way, and we don’t recommend using them for production applications. Therefore, you can use those nodes only at your own risk and discretion.',
  },
  {
    question: 'What are your future plans?',
    answer:
      "Soon we will release a free public load balancer and extrnode Premium for production use. The public extrnode load balancer will be hosted on Everstake's infrastructure. Developers will need to send requests to extrnode's RPC endpoint for the load balancer to reroute them to other RPCs. The premium version will have only nodes run by battle-tested validators, like 01node, Chainflow, Imperator, Chainode Tech, Stakin, Staking Facilities, to provide clients with higher communication speeds and reliability.",
  },
  {
    question: 'How will you protect your public load balancer from outages?',
    answer:
      'The balancer will have the entire fault-tolerant routing set up. And to ensure 99.9% uptime, we will add Everstake’s node to the cluster. If any public node is compromised, you will always be able to use ours, no matter what. At later stages, the solution will be distributed across different validators to ensure proper decentralization and secure it against any accidents.',
  },
  {
    question: 'Are you going to have a token?',
    answer:
      'There might be a governance token to reinforce decentralization through competition further and ensure fair remuneration for the work of node operators. It would incentivize validators to act honestly, promote fair competition, and make the ecosystem more resilient and reliable. Other utilities, such as granting the right to accept new node operators through a vote, are discussable.',
  },
]

export default DATA
