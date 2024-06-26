import {
  Body,
  Html,
  Tailwind,
  Head,
  Text,
  Container,
  Img,
  Section,
  Hr,
  Row,
  Link,
} from '@react-email/components'
import * as React from 'react'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

const BasicEmailTemplate = (
    <Html>
      <Head />
      <Tailwind>
        <Body className='bg-green-100 py-0 my-0 mx-auto'>
          <Container className='bg-green-200 my-0 mx-auto px-12m'>
            <Img
              src="https://fastly.picsum.photos/id/26/200/200.jpg?hmac=A1fbIskzMWVQs1JuyIsJXYGuCgqVwevLXT4YaIJM3Rk"
              width='100%'
              height='auto'
              alt="Image from Lorem Picsum"
            />
            <Section className='mx-auto my-6 px-8 text-[16px] leading=[23px]'>
              <Hr className='border-green-400 x-auto' />
              <Row>
                <Text>
                  Non laborum sunt et enim non exercitation pariatur.
                  Velit sunt sit officia in nostrud eiusmod amet Lorem aliquip.
                  Ad voluptate cillum mollit aliqua consectetur ipsum id consectetur labore non ea deserunt.
                </Text>
                <Text>
                  Greetings!
                  <ul>
                    <li>
                      Cupidatat excepteur excepteur amet fugiat est sint laboris labore.
                      Consequat non dolor exercitation dolore dolore velit culpa esse ullamco non est est.
                      Eiusmod do dolore fugiat velit nostrud consequat duis culpa quis.
                    </li>
                    <li>
                      Non laborum sunt et enim non exercitation pariatur.
                      Velit sunt sit officia in nostrud eiusmod amet Lorem aliquip.
                      Ad voluptate cillum mollit aliqua consectetur ipsum id consectetur labore non ea deserunt.

                      Esse aliquip ullamco eiusmod duis incididunt.
                      Non aliqua in minim nulla id laborum nostrud esse enim aliqua adipisicing.
                      Et voluptate sunt ut qui. Sint veniam velit id nisi voluptate anim esse Lorem culpa adipisicing sint occaecat veniam.
                    </li>
                  </ul>
                </Text>
                <Link href='https://example.com/contact'>Get in touch</Link>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )


export default BasicEmailTemplate
