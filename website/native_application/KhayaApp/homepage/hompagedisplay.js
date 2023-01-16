import { View, Text, Button } from 'react-native';
import BatteryTitle from './titles/batterytitle';
import LoadSheddingTittle from './titles/loadsheddingtitle';
import BatteryCard from './cards/batterycard';
import LoadSheddingCard from './cards/loadsheddingcard';

const HomePageDisplay = () => {
    return (
        <View>
            {/* 1.BATTERY INFORMATION */}
            <BatteryTitle />
            <BatteryCard />

            {/* 2.LOADSHEDDING DATA */}
            <LoadSheddingTittle />
            <LoadSheddingCard />
        </View>

    );
};

export default HomePageDisplay;
