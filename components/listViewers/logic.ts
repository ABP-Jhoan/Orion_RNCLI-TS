import {useState} from 'react'

export function usePagination() {
    const itemsPerPage = 10;
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);
    function handleScroll(event: any){
        const offsetY = event.nativeEvent.contentOffset.y;
        const contentHeight = event.nativeEvent.contentSize.height;
        const paddingToBottom = 20;

        if (offsetY + event.nativeEvent.layoutMeasurement.height >= contentHeight - paddingToBottom) {
            setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
        }
    };

    return [visibleItems, handleScroll]
}

