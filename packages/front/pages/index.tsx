import { NextPage } from 'next'

import { Button, Avatar, Typography, ThemeProvider } from '@local/design-system'

import { theme } from '../theme'

const Home: NextPage = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button>Teste</Button>
        <Avatar
          size="small"
          source="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        />
        <Avatar
          size="medium"
          fallbackSource="https://avatars.dicebear.com/api/initials/Samuel Petroline.svg"
          editable
        />
        <Avatar
          size="large"
          source="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        />
        {/* <Typography.Heading>Title</Typography.Heading> */}
        <Typography.Text>Teste</Typography.Text>
        <Typography.Text color="red.50" fontSize="2rem">
          em vermelho
        </Typography.Text>
      </ThemeProvider>
    </div>
  )
}

export default Home
