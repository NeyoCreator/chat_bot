import { View, Text, Button } from 'react-native';
import BatteryTitle from './titles/batterytitle';
import LoadSheddingTittle from './titles/loadsheddingtitle';
import BatteryCard from './cards/batterycard';
import LoadSheddingCard from './cards/loadsheddingcard';
import CenteredButton from './button';


const HomePageDisplay = () => {
    return (
        <View>
            {/* 1.BATTERY INFORMATION */}
            <BatteryTitle />
            <BatteryCard />

            {/* 2.LOADSHEDDING DATA */}
            <LoadSheddingTittle />
            <LoadSheddingCard />

            {/* 3.BUTTON */}
            <CenteredButton 
                onPress={()=>alert('Button pressed')}
                title='here'
            />

        </View>

    );
};

export default HomePageDisplay;
