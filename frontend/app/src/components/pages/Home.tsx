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
  useEffect(() => getDrawingVersions(), [getDrawingVersions]);

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
          {drawingVersions.map((drawingVersion) =>
            drawingVersion.drawing ? (
              <WrapItem key={drawingVersion.id} mx="auto">
                <DrawingCard
                  id={drawingVersion.drawing.id}
                  imageUrl="https://source.unsplash.com/random"
                  drawing_number={drawingVersion.drawing.drawing_number}
                  product_number={drawingVersion.drawing.product_number}
                  product_name={drawingVersion.drawing.product_name}
                  destination={drawingVersion.drawing.destination}
                  facility={drawingVersion.drawing.facility}
                  part_class={drawingVersion.drawing.part_class}
                  part_name={drawingVersion.drawing.part_name}
                  description={drawingVersion.description}
                  version_number={drawingVersion.version_number}
                  onClick={onClickDrawing}
                />
              </WrapItem>
            ) : null
          )}
        </Wrap>
      )}
      <DrawingDetailModal drawingVersion={selectedDrawing} isOpen={isOpen} isAdmin={LoginUser?.isAdmin} onClose={onClose} />
    </>
  );
});
