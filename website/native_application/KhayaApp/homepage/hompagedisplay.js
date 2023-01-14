import { View, Text, Button } from 'react-native';
import BatteryTitle from './titles/batterytitle';
import LoadSheddingTittle from './titles/loadsheddingtitle';
import BatteryCard from './cards/batterycard';
import LoadSheddingCard from './cards/loadsheddingcard';

const HomePageDisplay = () => {
    return (
        <View>
            {/* 1.BATTERY INFORMATION */}
            <br></br>
            <BatteryTitle />
            <br></br>
            <BatteryCard />

            <br></br>
            <br></br>

            {/* 2.LOADSHEDDING DATA */}
            <LoadSheddingTittle />
            <br></br>
            <LoadSheddingCard />
        </View>

    );
};

export default HomePageDisplay;
