import React from 'react'
import { Container, Accordion } from 'react-bootstrap'

import * as s from './FAQ.module.scss'

import DATA from './constants'

const FAQ = () => {
  return (
    <Container as="section" className={s.faq}>
      <h2>Frequently Asked Questions</h2>

      <Accordion className={s.accordion} defaultActiveKey={0} flush>
        {DATA.map(({ question, answer }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Accordion.Item key={`f${i}`} eventKey={i}>
            <Accordion.Header>{question}</Accordion.Header>
            <Accordion.Body>{answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
}

export default FAQ
