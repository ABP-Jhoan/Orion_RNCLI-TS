import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RefreshCcw } from 'lucide-react-native';

interface ReactButtonProps{
    onReload: () => void
}

const ReloadButton : React.FC<ReactButtonProps> = ({ onReload }) => {
  const navigation = useNavigation();

  const handleReload = useCallback(() => {
    if (onReload && typeof onReload === 'function') {
      onReload();
    }
  }, [onReload]);

  return (
    <TouchableOpacity onPress={handleReload}>
      <RefreshCcw color='#fff' size={30}/>
    </TouchableOpacity>
  );
};

export default ReloadButton;
