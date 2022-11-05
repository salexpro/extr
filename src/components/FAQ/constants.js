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
          responses if any node is down.
        </p>
        <p>
          While our public load balancer is still underway, we offer a list of
          Solana public RPC endpoints and an open-source balancer on Docker.
        </p>
      </>
    ),
  },
  {
    question:
      'Can I use a list of public RPC nodes and open-source load balancer balancer for production applications?',
    answer:
      'While those nodes are available freely and to anyone, there is no guarantee that they will operate as you expect. Everstake and extrnode do not control those nodes in any way, and we don’t recommend using them for production applications. Therefore, you can use those nodes only at your own risk and discretion.',
  },
  {
    question: 'How will you protect your public load balancer from outages?',
    answer:
      'The balancer will have the entire fault-tolerant routing set up. And to ensure 99.9% uptime, we will add Everstake’s node to the cluster. If any public node is compromised, you will always be able to use ours, no matter what. At later stages, the solution will be distributed across different validators to ensure proper decentralization and secure it against any accidents.',
  },
  {
    question: 'What are your future plans?',
    answer:
      'We are also developing a paid solution for enterprises and blockchain platforms. Its operation will be in the hands of battle-tested validators. Currently, the product is at early phases of development. However, it will be geographically distributed to ensure there is no single point of failure.',
  },
  {
    question: 'How will you protect your public load balancer from outages?',
    answer:
      'There might be a governance token to reinforce decentralization through competition further and ensure fair remuneration for the work of node operators. It would incentivize validators to act honestly, promote fair competition, and make the ecosystem more resilient and reliable. Other utilities, such as granting the right to accept new node operators through a vote, are discussable.',
  },
]

export default DATA
