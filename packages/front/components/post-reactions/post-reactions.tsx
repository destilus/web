import { Container, Content } from './post-reactions.styles'; 

import { BiCommentDetail, BiRefresh, BiHeart, BiUpload } from 'react-icons/bi';

import { ActionButton } from "@local/design-system"


const ActionButtons = () => {
  return (
    <>
      <Container>
        <Content>
          <ActionButton icon={BiCommentDetail} text=' 2,1 mil' />
          <ActionButton icon={BiRefresh} text='1,9 mil' />
          <ActionButton icon={BiHeart} text='9,3 mil' />
          <ActionButton icon={BiUpload} />
        </Content>
      </Container>
    </>
  );
};

export default ActionButtons;