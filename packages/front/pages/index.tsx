import { NextPage } from 'next'

import { Button, Avatar } from '@local/design-system'

const Home: NextPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
