import {useState} from 'react'

export function usePagination() {
    const itemsPerPage : number = 20;
    const [visibleItems, setVisibleItems] = useState<number|any>(itemsPerPage);
    function handleScroll(event: any){
        const offsetY = event.nativeEvent.contentOffset.y;
        const contentHeight = event.nativeEvent.contentSize.height;
        const paddingToBottom = 20;

        if (offsetY + event.nativeEvent.layoutMeasurement.height >= contentHeight - paddingToBottom) {
            setVisibleItems((prevVisibleItems : any) => prevVisibleItems + itemsPerPage);
        }
    };

    return [visibleItems, handleScroll]
}

