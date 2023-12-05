import React from "react";
import { View } from "react-native";
import DotLoader from "./Loaders";

export const LoaderView : React.FC = () => {
    return(
        <View>
            <DotLoader/>
        </View>
    )
}