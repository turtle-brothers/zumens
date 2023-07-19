import React, { memo, FC, useEffect, useCallback } from 'react';
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';

// import { useAllUsers } from '../../hooks/useAllUsers';
// import { useSelectUser } from '../../hooks/useSelectUser';
import { useAllDrawingVersions } from '../../hooks/useAllDrawings';
import { useSelectDrawing } from '../../hooks/useSelectDrawing';
import { useLoginUser } from '../../providers/LoginUserProvider';
// import { UserCard } from '../organisms/user/UserCard';
// import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { DrawingCard } from '../organisms/drawing/DrawingCard';
import { DrawingDetailModal } from '../organisms/drawing/DrawingDetailModal';
import { MenuSearch } from '../molecules/MenuSearch';

export const Home: FC = memo(() => {
  // const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { onSlectUser, selectedUser } = useSelectUser();
  const { onSlectDrawing, selectedDrawing } = useSelectDrawing();
  const { getDrawingVersions, drawingVersions, loading } = useAllDrawingVersions();
  const { LoginUser } = useLoginUser();

  // useEffect(() => getUsers, [getUsers]);
  useEffect(() => getDrawingVersions, [getDrawingVersions]);

  const onClickDrawing = useCallback(
    (id: number) => {
      onSlectDrawing({ id, drawingVersions, onOpen });
    },
    [onOpen, onSlectDrawing, drawingVersions]
  );

  return (
    <>
      {/* -------------------- */}
      <MenuSearch />
      {/* -------------------- */}

      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {/* 下記userの数が10件なので、10件分表示されている */}
          {drawingVersions.map((drawingVersions) => (
            <WrapItem key={drawingVersions.id} mx="auto">
              <DrawingCard
                id={drawingVersions.drawing.id}
                imageUrl="https://source.unsplash.com/random"
                // fullName={user.username}
                // userName={user.name}
                drawing_number={drawingVersions.drawing.drawing_number}
                product_number={drawingVersions.drawing.product_number}
                product_name={drawingVersions.drawing.product_name}
                destination={drawingVersions.drawing.destination}
                facility={drawingVersions.drawing.facility}
                part_class={drawingVersions.drawing.part_class}
                part_name={drawingVersions.drawing.part_name}
                description={drawingVersions.description}
                version_number={drawingVersions.version_number}
                onClick={onClickDrawing}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <DrawingDetailModal drawingVersion={selectedDrawing} isOpen={isOpen} isAdmin={LoginUser?.isAdmin} onClose={onClose} />
    </>
  );
});
