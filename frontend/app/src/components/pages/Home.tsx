import React, { memo, FC, useEffect, useCallback, useState } from 'react';
import { Box, Center, Flex, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';

// import { useAllUsers } from '../../hooks/useAllUsers';
// import { useSelectUser } from '../../hooks/useSelectUser';
import { useAllDrawingVersions } from '../../hooks/useAllDrawings';
import { useSelectDrawing } from '../../hooks/useSelectDrawing';
import { useLoginUser } from '../../providers/LoginUserProvider';
// import { UserCard } from '../organisms/user/UserCard';
// import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useDelete } from '../../hooks/useDelete';
import { DrawingCard } from '../organisms/drawing/DrawingCard';
import { DrawingDetailModal } from '../organisms/drawing/DrawingDetailModal';
import { MenuSearch } from '../molecules/MenuSearch';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Home: FC = memo(() => {
  // const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { onSlectUser, selectedUser } = useSelectUser();
  const { onSlectDrawing, selectedDrawing } = useSelectDrawing();
  const { getDrawingVersions, drawingVersions, loading } = useAllDrawingVersions();
  const { LoginUser, fetchLoginUser } = useLoginUser();
  const { deleteItem } = useDelete();

  //input
  const [drawingNumber, setDrawingNumber] = useState<string | null>(null);
  const [productNumber, setProductNumber] = useState<string | null>(null);
  const [versionNumber, setVersionNumber] = useState<string | null>(null);
  const [partName, setPartName] = useState<string | null>(null);
  //select
  const [productName, setProductName] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  const [facility, setFacility] = useState<string | null>(null);
  const [partClass, setPartClass] = useState<string | null>(null);

  const [sortOrder, setSortOrder] = useState('desc');
  // useEffect(() => getUsers, [getUsers]);
  useEffect(() => getDrawingVersions(sortOrder), [getDrawingVersions, sortOrder]);

  const onClickDrawing = useCallback(
    (id: number) => {
      onSlectDrawing({ id, drawingVersions, onOpen });
    },
    [onOpen, onSlectDrawing, drawingVersions]
  );

  const onDelete = useCallback(
    async (id: number | undefined) => {
      if (!id) {
        console.error('Invalid drawing ID: ', id);
        return;
      }
      await deleteItem(id);
      onClose();
    },
    [deleteItem, onClose]
  );

  // Homeコンポーネントがマウントされたときにログインユーザー情報を取得します
  useEffect(() => {
    fetchLoginUser();
  }, []);

  return (
    <>
      <MenuSearch
        drawingNumber={drawingNumber}
        productNumber={productNumber}
        versionNumber={versionNumber}
        partName={partName}
        productName={productName}
        destination={destination}
        facility={facility}
        partClass={partClass}
        onDrawingNumberChange={setDrawingNumber}
        onProductNumberChange={setProductNumber}
        onVersionNumberChange={setVersionNumber}
        onPartNameChange={setPartName}
        onProductNameChange={setProductName}
        onDestinationChange={setDestination}
        onFacilityChange={setFacility}
        onPartClassChange={setPartClass}
      />

      <Box>
        <Flex justifyContent="end" pr={8}>
          <PrimaryButton bgColor="teal.500" textColor="white" hoverOpacity={0.8} onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}>
            {sortOrder === 'desc' ? '昇順' : '降順'}
          </PrimaryButton>
        </Flex>
      </Box>

      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {drawingVersions
            .filter(
              (dv) =>
                (!drawingNumber || dv.drawing.drawing_number === drawingNumber) &&
                (!productNumber || dv.drawing.product_number === productNumber) &&
                (!versionNumber || dv.version_number === versionNumber) &&
                (!partName || dv.drawing.part_name === partName) &&
                (!productName || dv.drawing.product_name === productName) &&
                (!destination || dv.drawing.destination === destination) &&
                (!facility || dv.drawing.facility === facility) &&
                (!partClass || dv.drawing.part_class === partClass)
            )
            .sort((a, b) => {
              if (sortOrder === 'desc') {
                return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
              } else {
                return new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
              }
            })
            .map((drawingVersion) => (
              <WrapItem key={`${drawingVersion.drawing.drawing_number}-${drawingVersion.version_number}`} mx="auto">
                {/* <WrapItem key={drawingVersion.id} mx="auto"> */}
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
            ))}
        </Wrap>
      )}
      <DrawingDetailModal drawingVersion={selectedDrawing} isOpen={isOpen} isAdmin={LoginUser?.isAdmin} onClose={onClose} onDelete={onDelete} />
    </>
  );
});
