import { Html, Tailwind, Body, Text, Container } from '@react-email/components'

interface Props {
  content: String
}

const CustomTemplate = ({ content }: Props) => {
  return (
    <Html>
      <Tailwind>
        <Body className='font-sans text-gray-400 bg-gray-100'>
          <Container className='my-6 bg-white shadow-sm'>
            <Text>hello world</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
export default CustomTemplate
